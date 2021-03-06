/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, useEffect, useState } from "react";
import { isEqual } from "lodash";
import {
  Slider,
  Rail,
  Handles,
  Tracks,
  GetRailProps,
  GetHandleProps,
  GetTrackProps,
  SliderItem,
  Ticks,
} from "react-compound-slider";
import Flex from "../flex";
import "../containers.scss";
import "./index.scss";

interface SliderRailProps {
  getRailProps: GetRailProps;
}

function SliderRail({ getRailProps }: SliderRailProps) {
  return (
    <>
      <div className="railOuter" {...getRailProps()} />
      <div className="railInner" />
    </>
  );
}

interface HandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
  disabled?: boolean;
}

function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled = false,
  getHandleProps,
}: HandleProps) {
  return (
    <>
      <div
        className="handle"
        style={{
          left: `${percent}%`,
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          backgroundColor: disabled ? "#666" : undefined,
        }}
      />
    </>
  );
}

interface TrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
  disabled?: boolean;
}

function Track({
  source,
  target,
  getTrackProps,
  disabled = false,
}: TrackProps) {
  return (
    <div
      className="track"
      style={{
        backgroundColor: disabled ? "#999" : undefined,
        left: `calc(${source.percent}% - 4px)`,
        width: `calc(${target.percent - source.percent}% + 4px)`,
      }}
      {...getTrackProps()}
    />
  );
}

interface TickProps {
  tick: SliderItem;
  count: number;
  format?: (val: number) => string;
}

function Tick({ tick, count, format = (d) => `${d}` }: TickProps) {
  return (
    <div>
      <div
        className="tickPre"
        style={{
          left: `${tick.percent}%`,
        }}
      />
      <div
        className="tick"
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {format(tick.value)}
      </div>
    </div>
  );
}

interface BaseSliderProps<T> {
  title?: string;
  domain: number[];
  defaultValues: number[];
  step?: number;
  callback?: (n: readonly number[]) => void;
  slideCallback?: (n: readonly number[]) => void;
  disabled?: boolean;
  ticksNumber?: number;
  style?: CSSProperties;
}

const sliderStyle = {
  position: "relative" as any,
  width: "100%",
  touchAction: "none",
};

export default function BaseSlider<T>(props: BaseSliderProps<T>): JSX.Element {
  const {
    title,
    domain,
    defaultValues,
    step,
    callback,
    slideCallback,
    disabled,
    ticksNumber,
    style,
  } = props;
  const [state, setState] = useState<readonly number[]>(defaultValues.slice());

  useEffect(() => {
    if (!isEqual(state, defaultValues)) {
      setState(defaultValues);
    }
  }, [state, defaultValues]);

  return (
    <Flex style={{ overflow: "hidden" }}>
      <div className="container-with-desc">
        {title && <div>{title}</div>}
        <div
          style={{
            height: ticksNumber ? "44px" : "32px",
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "16px",
            width: "calc(100% - 8px)",
            margin: "auto",
            ...style,
          }}
        >
          <Slider
            mode={1}
            step={step || 1}
            disabled={disabled}
            domain={domain}
            rootStyle={sliderStyle}
            onUpdate={slideCallback}
            onChange={callback}
            values={state}
          >
            <Rail>
              {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map((handle) => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
            {ticksNumber && (
              <Ticks count={ticksNumber}>
                {({ ticks }) => (
                  <div className="slider-ticks">
                    {ticks.map((tick) => (
                      <Tick key={tick.id} tick={tick} count={ticks.length} />
                    ))}
                  </div>
                )}
              </Ticks>
            )}
          </Slider>
        </div>
      </div>
    </Flex>
  );
}
