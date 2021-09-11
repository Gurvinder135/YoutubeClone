import React from "react";
import "./css/minisidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Main from "./Main";
import Searchcard from "./Searchcard";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import MovieIcon from "@material-ui/icons/Movie";
import trending from "./json/trending.json";
import music from "./json/music.json";
import movies from "./json/movies.json";
import gaming from "./json/gaming.json";
import Header from "./Header";

export default function Minisidebar({ sidebar }) {
  return (
    <Router>
      <div className="minisidebar__container">
        <Header sidebar={sidebar} />
        <div className="app">
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
        </div>
      </div>
    </Router>
  );
}
