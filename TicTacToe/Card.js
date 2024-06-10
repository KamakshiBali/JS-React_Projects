import React from "react";
import Data from "./Data.js";

export default function Card() {
  function newMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main className="main-form">
      <form className="form">
        <div className="form-inputs">
          <input type="text" className="form-input" placeholder="top-text" />
          <input type="text" className="form-input" placeholder="bottom-text" />
        </div>
        <button className="form-button" onClick={newMeme}>
          Generate new meme
        </button>
      </form>
    </main>
  );
}
