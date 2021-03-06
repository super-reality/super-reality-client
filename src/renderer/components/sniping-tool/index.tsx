/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from "react";
import fs from "fs";
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import ButtonSimple from "../button-simple";
import logger from "../../../utils/logger";
import { voidFunction } from "../../constants";
import userDataPath from "../../../utils/files/userDataPath";

export default function SnipingTool() {
  // eslint-disable-next-line global-require
  const { remote, nativeImage } = require("electron") as any;
  const userData = userDataPath();
  const fileName = `${userData}/capture.png`;
  const output = `${userData}/crop.png`;
  const [crop, setCrop] = useState<any>({});

  useEffect(() => {
    fs.unlink(output, voidFunction);
    logger(
      "info",
      remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()
    );
  }, []);

  const doClick = useCallback(async () => {
    logger(
      "info",
      `image crop: x: ${crop.x}, y: ${crop.y}, w:${crop.width}, h:${crop.height}`
    );
    const image = nativeImage.createFromPath(fileName).crop({
      x: crop.x,
      y: crop.y,
      width: crop.width,
      height: crop.height,
    });
    // console.log(image);
    fs.writeFile(output, image.toPNG(), {}, () => {
      remote.getCurrentWindow().close();
    });
  }, [crop]);

  return (
    <>
      <ReactCrop
        src={fileName}
        crop={crop}
        onChange={(newCrop: any) => setCrop(newCrop)}
      />
      {crop.x + crop.y + crop.width + crop.height !== 0 ? (
        <ButtonSimple
          width="200px"
          height="24px"
          margin="auto"
          style={{
            position: "absolute",
            bottom: "56px",
            left: "calc(50% - 100px)",
            boxShadow: "0 7px 10px 4px #00000052",
          }}
          onClick={doClick}
        >
          Done
        </ButtonSimple>
      ) : (
        <></>
      )}
    </>
  );
}
