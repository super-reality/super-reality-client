/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import "../popups.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ItemInner,
  Title,
  ContainerTopFace,
  ContainerFlex,
  Text,
} from "../item-inner";
import globalData from "../../globalData";
import usePopup from "../../hooks/usePopup";
import ButtonSimple from "../button-simple";
import Collapsible from "../collapsible";
import Step from "../step";
import TeacherBotLesson from "../teacherbot-lesson";
import LessonActive from "../lesson-active";
import createDetachedWindow from "../../../utils/createDetachedWindow";
import { AppState } from "../../redux/stores/renderer";
import { ILessonGet } from "../../api/types/lesson/get";
import {
  findCVArrayMatch,
  getCurrentFindWindow,
} from "../../../utils/createFindBox";
import jsonRpcRemote from "../../../utils/jsonRpcSend";

interface ViewLessonProps {
  id: string;
  data?: ILessonGet;
}

export default function ViewLesson(props: ViewLessonProps) {
  let onProcessing: boolean = false;
  const { id, data } = props;
  const lessonData = data || globalData.lessons[id] || undefined;
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const { detached } = useSelector((state: AppState) => state.commonProps);

  const doNext = useCallback(() => {
    if (lessonData == undefined || onProcessing) {
      return;
    }
    if (lessonData?.totalSteps.length <= currentStep + 1) {
      return;
    }
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const doPrev = useCallback(() => {
    if (lessonData == undefined || onProcessing) {
      return;
    }
    if (currentStep - 1 < 0) {
      return;
    }
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const clickDetach = useCallback(() => {
    createDetachedWindow(
      { width: 350, height: 400 },
      { arg: data || globalData.lessons[id], type: "LESSON_VIEW" }
    );
  }, []);

  const [Popup, open] = usePopup(false);

  useEffect(() => {
    if (lessonData && onProcessing == false) {
      onProcessing = true;
      if (getCurrentFindWindow() != null) {
        let findWin = getCurrentFindWindow();
        findWin.close();
        findWin = null;
      }
      const imageUrls = lessonData.totalSteps[currentStep].images;
      const { functions } = lessonData.totalSteps[currentStep];
      const playText = lessonData.totalSteps[currentStep].description;

      findCVArrayMatch(imageUrls, functions)
        .then((res) => {
          if (res) {
            console.log("match exists");
          } else {
            console.log("match failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      jsonRpcRemote("TTS", { text: playText })
        .then((res) => {
          console.log("playing nice");
          onProcessing = false;
        })
        .catch((err) => {
          console.log("error occured while playing");
          onProcessing = false;
        });
    }
    if (!lessonData) open();
  });

  return (
    <>
      <Popup width="340px" height="auto">
        <div className="validation-popup">
          <div className="title red">Oops!</div>
          <div className="line">The requested lesson is not available..</div>
          <ButtonSimple
            width="140px"
            height="24px"
            margin="16px auto"
            onClick={() => history.goBack()}
          >
            Ok
          </ButtonSimple>
        </div>
      </Popup>
      {lessonData ? (
        <>
          <Collapsible
            outer
            expanded
            detach={detached ? undefined : clickDetach}
            title="Step"
          >
            <ItemInner>
              <ContainerTopFace>
                <TeacherBotLesson />
                <Title
                  style={{ marginTop: "2px", justifyContent: "initial" }}
                  title={lessonData.totalSteps[currentStep].name}
                  sub={`Step ${currentStep + 1}`}
                />
              </ContainerTopFace>
              <ContainerFlex>
                <Text>{lessonData.totalSteps[currentStep].description}</Text>
              </ContainerFlex>
              <ContainerFlex style={{ justifyContent: "space-around" }}>
                <ButtonSimple width="120px" height="16px" onClick={doPrev}>
                  Prev
                </ButtonSimple>
                <ButtonSimple width="120px" height="16px" onClick={doNext}>
                  Next
                </ButtonSimple>
              </ContainerFlex>
            </ItemInner>
          </Collapsible>
          <Collapsible outer title="Lesson Info">
            <LessonActive id={data?._id || id} />
          </Collapsible>
          <Collapsible outer title="Steps">
            {lessonData.totalSteps.map((step, i: number) => (
              <Step
                key={`step-${i}`}
                number={i + 1}
                data={step}
                drag={false}
                style={{ margin: "5px 10px", height: "auto" }}
              />
            ))}
          </Collapsible>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
