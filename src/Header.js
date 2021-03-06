import React, { useState, useEffect } from "react";
import "./css/header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import MicSharpIcon from "@material-ui/icons/MicSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import logo from "./YouTube_Logo.svg";
import { useHistory } from "react-router-dom";
export default function Header({ sidebar, search, input, tempinput }) {
  let history = useHistory();
  const [largeMedia, setLargemedia] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(min-width: 780px)");
    setLargemedia(mediaWatcher.matches);
    mediaWatcher.addEventListener("change", (e) => {
      setLargemedia(e.matches);
    });
    return () => {
      mediaWatcher.removeEventListener();
    };
  }, []);
  function a() {
    history.push("/");
  }
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon className="header--img" onClick={sidebar} />

        <img className="header__img" src={logo} alt="" onClick={a} />
      </div>
      {largeMedia ? (
        <div className="header__mid">
          <div className="header__input">
            <input
              onChange={input}
              placeholder="Search"
              value={tempinput}
            ></input>
            <SearchSharpIcon className="header--img" onClick={search} />
          </div>
          <MicSharpIcon className="header--img" />
        </div>
      ) : (
        <div className="header__mobile">
          <SearchSharpIcon className="header--img-mobile" onClick={search} />
        </div>
      )}

      <div className="header__right">
        <VideoCallSharpIcon className="header--img" />
        <AppsSharpIcon className="header--img" />
        <NotificationsSharpIcon className="header--img header--hide" />
        <div className="header__logo">G</div>
      </div>
    </div>
  );
}
