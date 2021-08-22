import React from "react";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./css/playpage.css";
import Playcard from "./Playcard";
export default function Playpage() {
  return (
    <div className="playpage">
      <div className="playpage__left">
        <img src="https://source.unsplash.com/640x360/?nature,water" alt="" />
        <div className="playpage__title">
          Let's Build a YouTube Clone with REACT JS for Beginners
        </div>
        <div className="playpage__desc playpage--flex-row">
          <div className="playpage__minitext">
            186,953 views * Streamed live on Jul 29, 2020
          </div>
          <div>
            <ThumbUpIcon className="playpage__icon" />
            <ThumbDownIcon className="playpage__icon" />
          </div>
        </div>

        <div className="playpage--flex-row hr">
          <img src="https://source.unsplash.com/48x48/?nature,water" alt="" />
          <div className="playpage--flex-column">
            <div className="playpage__minititle"> CTV News</div>
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
      <div className="playpage__right">
        <Playcard />
      </div>
    </div>
  );
}
