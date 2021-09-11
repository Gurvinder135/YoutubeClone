import Header from "./Header";
import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Minisidebar from "./Minisidebar";
import { Route } from "react-router-dom";
import Main from "./Main";
import Searchcard from "./Searchcard";
import trending from "./json/trending.json";
import music from "./json/music.json";
import movies from "./json/movies.json";
import gaming from "./json/gaming.json";
import Popup from "./Popup";
import Playpage from "./Playpage";
import { useHistory } from "react-router-dom";
import moment from "moment";
import SearchPopup from "./SearchPopup";

function App() {
  const [minibar, setMinibar] = useState("0");
  const [largeMedia, setLargemedia] = useState(false);
  const [popUp, setPopup] = useState(false);
  const [smallMedia, setSmallmedia] = useState(false);
  const [tempinput, settempinput] = useState("");
  const [searchMedia, setsearchmedia] = useState(false);
  const [showsearch, setshowsearch] = useState(0);
  const [searchlist, setsearchlist] = useState([]);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(min-width: 840px)");
    setLargemedia(mediaWatcher.matches);
    mediaWatcher.addEventListener("change", (e) => {
      setLargemedia(e.matches);
      if (largeMedia === false) {
        setMinibar("1");
      }
    });
    const mediaWatcher1 = window.matchMedia("(max-width: 640px)");
    setSmallmedia(mediaWatcher1.matches);
    mediaWatcher1.addEventListener("change", (e) => {
      setSmallmedia(e.matches);
    });
    const mediaWatcher2 = window.matchMedia("(max-width: 780px)");
    setsearchmedia(mediaWatcher2.matches);
    mediaWatcher2.addEventListener("change", (e) => {
      setsearchmedia(e.matches);
      if (searchMedia === false) {
        setshowsearch(0);
      }
    });
    return () => {
      mediaWatcher.removeEventListener();
      mediaWatcher1.removeEventListener();
      mediaWatcher2.removeEventListener();
    };
  }, []);
  let history = useHistory();
  const input = (e) => {
    settempinput(e.target.value);
  };
  const search = async (e) => {
    if (searchMedia === false) {
      setsearchlist([]);
      let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${tempinput}&key=AIzaSyAfaZSSZJdd4kpW2GBQejNDjZTm6F0J6K4`;
      let fetchApi = await fetch(url, { mode: "cors" });
      let response = await fetchApi.json();
      settempinput("");
      setsearchlist(response.items);
      history.push("./search");
    } else if (searchMedia === true && showsearch === 0) {
      setshowsearch(1);
    } else if (searchMedia === true && showsearch === 1) {
      setsearchlist([]);
      let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${tempinput}&key=AIzaSyAfaZSSZJdd4kpW2GBQejNDjZTm6F0J6K4`;
      let fetchApi = await fetch(url, { mode: "cors" });
      let response = await fetchApi.json();
      settempinput("");
      setsearchlist(response.items);
      history.push("./search");
      setshowsearch(0);
    }
  };
  const sidebar = () => {
    if (minibar === "0" && largeMedia === true) {
      setMinibar("1");
    } else if (minibar === "1" && largeMedia === true) {
      setMinibar("0");
    } else if (smallMedia === true) {
      setPopup(true);
    }
  };
  function popup() {
    setPopup(false);
  }
  const hidesearch = () => {
    setshowsearch(0);
  };
  return (
    <div>
      {showsearch === 1 ? (
        <SearchPopup search={search} input={input} hidesearch={hidesearch} />
      ) : (
        <></>
      )}
      <Header
        sidebar={sidebar}
        search={search}
        input={input}
        tempinput={tempinput}
      />
      <div className="app">
        {minibar === "1" ? (
          <div>
            <Minisidebar sidebar={sidebar} />
          </div>
        ) : (
          <div>
            <Sidebar sidebar={sidebar} />
          </div>
        )}
        {popUp ? <Popup popup={popup} /> : <div></div>}

        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/trending">
          <div className="flex">
            {trending.map((home, index) => (
              <Searchcard
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
        </Route>
        <Route path="/music">
          <div className="flex">
            {music.map((home, index) => (
              <Searchcard
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
        </Route>
        <Route path="/movies">
          <div className="flex">
            {movies.map((home, index) => (
              <Searchcard
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
        </Route>
        <Route path="/gaming">
          <div className="flex">
            {gaming.map((home, index) => (
              <Searchcard
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
        </Route>
        <Route path="/search">
          <div className="flex">
            {searchlist.map((home, index) => (
              <Searchcard
                key={index}
                url={`https://www.youtube.com/embed/${home.id.videoId}`}
                title={home.snippet.title}
                logo={home.snippet.thumbnails.medium.url}
                channel={home.snippet.channelTitle}
                view={`${(index + 9) * 2.5}k`}
                time={moment(home.snippet.publishedAt).fromNow()}
              />
            ))}
          </div>
        </Route>
        <Route path="/player">
          <Playpage />
        </Route>
      </div>
    </div>
  );
}

export default App;
