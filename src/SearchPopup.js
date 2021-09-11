import React from "react";
import "./css/searchpopup.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
export default function SearchPopup({ search, input, tempinput, hidesearch }) {
  return (
    <div className="searchcontainer">
      <ArrowBackIcon className="arrow" onClick={hidesearch} />
      <div className="searchpopup">
        <input onChange={input} placeholder="Search" value={tempinput}></input>
        <SearchSharpIcon className="searchpopup--img" onClick={search} />
      </div>
    </div>
  );
}
