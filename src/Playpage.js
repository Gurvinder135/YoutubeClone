import React from "react";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./css/playpage.css";
import Playcard from "./Playcard";
import { useLocation } from "react-router-dom";
export default function Playpage() {
  let location = useLocation();
  let url = location.state.parms.url;
  let title = location.state.parms.title;
  let channel = location.state.parms.channel;
  let logo = location.state.parms.logo;
  let view = location.state.parms.view;
  let time = location.state.parms.time;
  // console.log(location.state.parms.title, location.state.parms.channel);
  return (
    <div className="playpage">
      <div className="playpage__left">
        <iframe
          width="980"
          height="540"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="playpage__title">{title}</div>
        <div className="playpage__desc playpage--flex-row">
          <div className="playpage__minitext">
            {view} views • Streamed {time}{" "}
          </div>
          <div>
            <ThumbUpIcon className="playpage__icon" />
            <ThumbDownIcon className="playpage__icon" />
          </div>
        </div>

        <div className="playpage--flex-row hr">
          <img src={logo} alt="" />
          <div className="playpage--flex-column">
            <div className="playpage__minititle"> {channel}</div>
            <div className="playpage__sub">696K subscribers</div>
          </div>
        </div>
        <div className="playpage__comment">
          Comments are turned off.{" "}
          <a href="https://support.google.com/youtube/answer/9706180?hl=en">
            Learn more
          </a>
        </div>
      </div>
      <div className="playpage__right">{/* <Playcard /> */}</div>
    </div>
  );
}
