import React from "react";
import "./css/main.css";
import Card from "./Card";
import home from "./json/home.json";
export default function Main() {
  return (
    <div className="main">
      <div className="main__container">
        {home.map((home, index) => (
          <Card
            key={index}
            url={home.src}
            title={home.title}
            logo={home.logo}
            channel={home.channel}
            view={home.views}
            time={home.date}
          />
        ))}
      </div>
    </div>
  );
}
