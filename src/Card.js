import React from "react";
import "./css/card.css";
import { useHistory } from "react-router-dom";
export default function Card({ url, title, logo, channel, view, time }) {
  let history = useHistory();
  function openplaypage() {
    history.push({
      pathname: "/player",
      state: { parms: { title, channel, logo, url, view, time } },
    });
  }
  return (
    <div className="card">
      <iframe
        width="337"
        height="190"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="card__content" onClick={openplaypage}>
        <div className="card__logo">
          <img src={logo} alt="" />
        </div>
        <div className="card__info">
          <div className="card__title">{title}</div>
          <div className="card__text"> {channel}</div>
          <div className="card_flex">
            <div className="card__text">
              {view} views • Streamed {time}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
