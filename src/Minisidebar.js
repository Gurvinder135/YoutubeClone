import React from "react";
import "./css/minisidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { NavLink } from "react-router-dom";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import MovieIcon from "@material-ui/icons/Movie";

export default function Minisidebar() {
  return (
    <div>
      <div className="minisidebar">
        <NavLink exact activeClassName="active" to="/">
          <div className="minisidebar__home">
            <HomeIcon className="minisidebar__icon" />
            <div className="minisidebar__text">Home</div>
          </div>
        </NavLink>
        <NavLink to="/trending">
          <div className="minisidebar__home">
            <WhatshotIcon className="minisidebar__icon" />
            <div className="minisidebar__text">Trending</div>
          </div>
        </NavLink>
        <div className="minisidebar__hr"></div>
        <NavLink to="/music">
          <div className="minisidebar__home">
            <LibraryMusicIcon className="minisidebar__icon" />
            <div className="minisidebar__text">Music</div>
          </div>
        </NavLink>
        <NavLink to="/movies">
          <div className="minisidebar__home">
            <MovieIcon className="minisidebar__icon" />
            <div className="minisidebar__text">Movies</div>
          </div>
        </NavLink>
        <NavLink to="/gaming">
          <div className="minisidebar__home">
            <SportsEsportsIcon className="minisidebar__icon" />
            <div className="minisidebar__text">Gaming</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
