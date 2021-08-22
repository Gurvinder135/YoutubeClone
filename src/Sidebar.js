import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import MovieIcon from "@material-ui/icons/Movie";
import "./css/sidebar.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Main from "./Main";
import Searchcard from "./Searchcard";
import trending from "./json/trending.json";
import music from "./json/music.json";
import movies from "./json/movies.json";
import gaming from "./json/gaming.json";

export default function Sidebar() {
  return (
    <Router>
      <div className="sidebar">
        <NavLink exact to="/">
          <div className="sidebar__home">
            <HomeIcon className="sidebar__icon" />
            <div className="sidebar__text">Home</div>
          </div>
        </NavLink>
        <NavLink to="/trending">
          <div className="sidebar__home">
            <WhatshotIcon className="sidebar__icon" />
            <div className="sidebar__text">Trending</div>
          </div>
        </NavLink>
        <div className="sidebar__hr"></div>
        <NavLink to="/music">
          <div className="sidebar__home">
            <LibraryMusicIcon className="sidebar__icon" />
            <div className="sidebar__text">Music</div>
          </div>
        </NavLink>
        <NavLink to="/movies">
          <div className="sidebar__home">
            <MovieIcon className="sidebar__icon" />
            <div className="sidebar__text">Movies</div>
          </div>
        </NavLink>
        <NavLink to="/gaming">
          <div className="sidebar__home">
            <SportsEsportsIcon className="sidebar__icon" />
            <div className="sidebar__text">Gaming</div>
          </div>
        </NavLink>
      </div>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/trending">
        <div className="flex">
          {trending.map((home) => (
            <Searchcard
              url={home.src}
              title={home.title}
              logo={home.logo}
              channel={home.channel}
              view={home.views}
              time={home.date}
            />
          ))}
        </div>
      </Route>
      <Route path="/music">
        <div className="flex">
          {music.map((home) => (
            <Searchcard
              url={home.src}
              title={home.title}
              logo={home.logo}
              channel={home.channel}
              view={home.views}
              time={home.date}
            />
          ))}
        </div>
      </Route>
      <Route path="/movies">
        <div className="flex">
          {movies.map((home) => (
            <Searchcard
              url={home.src}
              title={home.title}
              logo={home.logo}
              channel={home.channel}
              view={home.views}
              time={home.date}
            />
          ))}
        </div>
      </Route>
      <Route path="/gaming">
        <div className="flex">
          {gaming.map((home) => (
            <Searchcard
              url={home.src}
              title={home.title}
              logo={home.logo}
              channel={home.channel}
              view={home.views}
              time={home.date}
            />
          ))}
        </div>
      </Route>
    </Router>
  );
}
