import React from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { NavLink } from "react-router-dom";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import MovieIcon from "@material-ui/icons/Movie";
import "./css/popup.css";
export default function Popup({ popup }) {
  return (
    <div className="popup__container">
      <div className="popup__left">
        <MenuSharpIcon className="popup__icon hb" onClick={popup} />
        <hr></hr>
        <div className="popup">
          <NavLink exact activeClassName="active" to="/">
            <div className="popup__home">
              <HomeIcon className="popup__icon" />
              <div className="popup__text">Home</div>
            </div>
          </NavLink>
          <NavLink to="/trending">
            <div className="popup__home">
              <WhatshotIcon className="popup__icon" />
              <div className="popup__text">Trending</div>
            </div>
          </NavLink>
          <div className="popup__hr"></div>
          <NavLink to="/music">
            <div className="popup__home">
              <LibraryMusicIcon className="popup__icon" />
              <div className="popup__text">Music</div>
            </div>
          </NavLink>
          <NavLink to="/movies">
            <div className="popup__home">
              <MovieIcon className="popup__icon" />
              <div className="popup__text">Movies</div>
            </div>
          </NavLink>
          <NavLink to="/gaming">
            <div className="popup__home">
              <SportsEsportsIcon className="popup__icon" />
              <div className="popup__text">Gaming</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
