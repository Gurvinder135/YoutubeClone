import React from "react";
import "./css/searchcard.css";
import { useHistory } from "react-router-dom";
export default function Searchcard({ url, title, logo, channel, view, time }) {
  let history = useHistory();
  function openplaypage() {
    history.push({
      pathname: "/player",
      state: { parms: { title, channel, logo, url, view, time } },
    });
  }
  return (
    <div className="searchcard">
      <iframe
        width="360"
        height="201"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="searchcard__content" onClick={openplaypage}>
        <div className="searchcard__title">{title}</div>
        <div className="searchcard__minitext">
          {view} views • Streamed {time}
        </div>
        <div className="searchcard__info">
          <div className="searchcard__logo">
            <img src={logo} alt="" />
          </div>
          <div className="searchcard__text"> {channel}</div>
        </div>
      </div>
    </div>
  );
}
