import getSTT from "../../../../../utils/getSTT";
import timestampToTime from "../../../../../utils/timestampToTime";
import trimAudio from "../../../../../utils/trimAudio";
import { recordingPath, tempPath } from "../../../../electron-constants";
import store from "../../../../redux/stores/renderer";
import newItem from "../../lesson-utils/newItem";
import { GeneratedData } from "./types";

interface AudioPiece {
  time: number;
  step: string;
  name: string;
  text: string;
}

function makeDialogsFromPieces(
  baseData: GeneratedData,
  pieces: AudioPiece[]
): Promise<GeneratedData> {
  const newData = { ...baseData };
  console.log("Audio Pieces", pieces);

  const promises = pieces.map((p) => {
    return newItem(
      {
        type: "dialog",
        text: p.text,
        anchor: false,
        trigger: 1,
        relativePos: {
          width: 300,
          height: 140,
          horizontal: 50,
          vertical: 50,
          x: 0,
          y: 0,
        },
      },
      baseData.steps[p.step]._id
    ).then((item) => {
      if (item) {
        newData.items[p.name] = item;
      }
    });
  });

  return Promise.all(promises).then(() => newData);
}

export default function generateDialogues(
  baseData: GeneratedData
): Promise<GeneratedData> {
  const audioPieces: AudioPiece[] = [];
  const { recordingData, currentRecording } = store.getState().createLessonV2;

  // Split the recording data between clicks
  let last = 0;
  recordingData.step_data.forEach((data) => {
    const stepName = `step ${data.time_stamp}`;
    const itemName = `dialog ${data.time_stamp}`;
    const timestamp = data.time_stamp;
    const timestampTime = timestampToTime(timestamp);
    const seconds = timestampTime / 1000;
    if (data.type == "left_click" || data.type == "right_click") {
      audioPieces.push({
        time: seconds,
        step: stepName,
        name: itemName,
        text: "",
      });
    }
    last = seconds;
  });

  // Chain promises to call STT and get the strings
  const promises = audioPieces.map((piece, index) => {
    return new Promise<string>((resolve, reject) => {
      const from = piece.time;
      const to = audioPieces[index + 1]?.time ?? last;

      console.log(`trimAudio from ${from} to ${to} (${to - from})`);
      trimAudio(
        `${from}`,
        `${to - from}`,
        `${recordingPath}aud-${currentRecording}.webm`,
        `${tempPath}${from}-${to}.webm`
      )
        .then((file) => {
          try {
            getSTT(file).then((text) => {
              if (
                text !== "Google Speech Recognition could not understand audio"
              ) {
                audioPieces[index].text = text;
                resolve(text);
              } else {
                resolve("");
              }
            });
          } catch (e) {
            reject(e);
          }
        })
        .catch(reject);
    });
  });

  return Promise.all(promises).then(() =>
    makeDialogsFromPieces(
      baseData,
      audioPieces.filter((p) => p.text !== "")
    )
  );
}
