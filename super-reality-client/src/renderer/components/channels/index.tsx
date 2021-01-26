import "./index.scss";
import React from "react";

import ButtonAdd from "../../../assets/images/add-circle.png";

import PacMan from "../../../assets/images/pacman.png";
import Sonic from "../../../assets/images/sonic.png";
import TeacherBot from "../../../assets/svg/teacher-bot.svg";
import { ReactComponent as Help } from "../../../assets/svg/support.svg";
import { Group } from "../../../types/chat";

import Support from "../support";

interface ChannelsProps {
  activeGroup: Group;
}

export default function Channels(props: ChannelsProps): JSX.Element {
  const { activeGroup } = props;
  return (
    <div style={{ display: "flex", height: "100%", overflowY: "scroll" }}>
      <div className="channel">
        <div className="active-group">{activeGroup.collectiveName}</div>
        <div className="group-settings-dropdown">
          <ul>
            <li>Group settings</li>
          </ul>
        </div>
        <div className="channel-title">Super Powers</div>
        <div className="add">
          <button type="button">
            <img src={ButtonAdd} />
          </button>
        </div>
        <div className="channel-container">
          <div className="channels">
            <div className="single-channel">
              {/* <img className="avatar" src={Support} alt="" /> */}
              {/* <Support /> */}
              <div className="info">Support</div>
            </div>
            <div className="single-channel">
              <img className="avatar" src={TeacherBot} alt="" />
              <div className="info">Teacher Bot</div>
            </div>
          </div>
          <div className="channel-container">
            <div className="channels">
              <div className="single-channel">
                {/* <img className="avatar" src={Support} alt="" /> */}
                <div className="info">Support</div>
              </div>
              <div className="single-channel">
                <img className="avatar" src={TeacherBot} alt="" />
                <div className="info">Teacher Bot</div>
              </div>
            </div>
            <div className="channel-container">
              <div className="channels">
                <div className="single-channel">
                  {/* <img className="avatar" src={Support} alt="" /> */}
                  <Help />
                  <div className="info">Support</div>
                </div>
                <div className="single-channel">
                  <img className="avatar" src={TeacherBot} alt="" />
                  <div className="info">Teacher Bot</div>
                </div>
              </div>
              <div className="channel-container">
                <div className="channels">
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Support</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Get Help</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={Sonic} alt="" />
                    <div className="info">Give Help</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Requests</div>
                  </div>
                </div>
              </div>
              <div className="title">Rooms</div>
              <div className="add">
                <button type="button">
                  <img src={ButtonAdd} />
                </button>
              </div>
              <div className="channel-container">
                <div className="channels">
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Meeting Room A</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={Sonic} alt="" />
                    <div className="info">Tutorial Creators</div>
                  </div>
                </div>
              </div>
              <div className="title">Mentors</div>
              <div className="add">
                <button type="button">
                  <img src={ButtonAdd} />
                </button>
              </div>
              <div className="channel-container">
                <div className="channels">
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Sonic</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={Sonic} alt="" />
                    <div className="info">Pac-Girl</div>
                  </div>
                </div>
              </div>
              <div className="title">Game</div>
              <div className="add">
                <button type="button">
                  <img src={ButtonAdd} />
                </button>
              </div>
              <div className="channel-container">
                <div className="channels">
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Tutorials</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={Sonic} alt="" />
                    <div className="info">Events</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={PacMan} alt="" />
                    <div className="info">Missions</div>
                  </div>
                  <div className="single-channel">
                    <img className="avatar" src={Sonic} alt="" />
                    <div className="info">Quests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
}
