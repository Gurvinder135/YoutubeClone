import React from "react";
import "./css/card.css";
export default function Card({ url, title, logo, channel, view, time }) {
  return (
    <div className="card">
      <iframe
        width="337"
        height="190"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="card__content">
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
