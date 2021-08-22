import React from "react";
import "./css/playcard.css";
export default function Playcard() {
  return (
    <div className="playcard">
      <img src="https://source.unsplash.com/168x94/?nature,water" alt="" />
      <div className="playcard__content">
        <div className="playcard__title">
          Let's Build a YouTube Clone with REACT JS for Beginners
        </div>

        <div className="playcard__text"> Clever Programmer</div>

        <div className="playcard__minitext">
          77K views * Streamed 4 months ago{" "}
        </div>
      </div>
    </div>
  );
}
