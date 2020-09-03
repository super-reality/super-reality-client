/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import Axios from "axios";
import {
  ItemInner,
  Icon,
  Points,
  Title,
  Text,
  Image,
  ContainerTop,
  ContainerFlex,
  ContainerBottom,
  ItemInnerLoader,
} from "../item-inner";
import CheckButton from "../check-button";
import ShareButton from "../share-button";
import TrashButton from "../trash-button";
import { AppState } from "../../redux/stores/renderer";
import usePopupAdd from "../../hooks/usePopupAdd";
import globalData from "../../globalData";
import { API_URL } from "../../constants";
import { ApiError } from "../../api/types";
import Collapsible from "../collapsible";
import LessonGet, { ILessonGet } from "../../api/types/lesson/get";
import handleLessonGet from "../../api/handleLessonGet";
import Step from "../step";

interface LessonActiveProps {
  id: string;
  compact?: boolean;
}

export default function LessonActive(props: LessonActiveProps): JSX.Element {
  const { id, compact } = props;
  const [data, setData] = useState<ILessonGet | undefined>();
  const checked = useSelector((state: AppState) =>
    state.userData.lessons.includes(id)
  );

  const [PopupAdd, open] = usePopupAdd(checked, "lesson", id);

  useEffect(() => {
    Axios.get<LessonGet | ApiError>(`${API_URL}lesson/${id}`)
      .then(handleLessonGet)
      .then((d) => {
        globalData.lessons[id] = d.lesson;
        setData(d.lesson);
      })
      .catch(console.error);
  }, []);

  return data ? (
    <>
      <ItemInner text>
        <PopupAdd />
        <ContainerTop>
          <Icon url={data.icon} />
          <Points points={0} />
          <Title title={data.name} sub={`${data.totalSteps.length} Steps`} />
        </ContainerTop>
        <ContainerFlex>
          <Text>{data.description}</Text>
        </ContainerFlex>
        <ContainerFlex>
          {data.medias.map((url) => (
            <Image key={`url-image-${url}`} src={url} />
          ))}
        </ContainerFlex>
        <ContainerBottom>
          <CheckButton
            style={{ margin: "auto" }}
            checked={checked}
            callback={open}
          />
          <div />
          <TrashButton type="collection" id={data._id} />
          <ShareButton style={{ margin: "auto" }} />
        </ContainerBottom>
      </ItemInner>
      {compact ? (
        <></>
      ) : (
        <Collapsible expanded outer title="Subjects">
          {data.totalSteps.map((step, i: number) => (
            <Step
              key={`step-${i}`}
              number={i + 1}
              data={step}
              drag={false}
              style={{ margin: "5px 10px", height: "auto" }}
            />
          ))}
        </Collapsible>
      )}
    </>
  ) : (
    <ItemInnerLoader style={{ height: "400px" }} />
  );
}
