import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="header">
        <p className="title">Navbar</p>
        <input className="input" placeholder="Serch" />
        <details className="accordion">
          <summary>Name</summary>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
        </details>
      </div>
      <div className="menu">
        <button className="newThread">新しいスレッド</button>
        <ul className="category">
          <li>
            <a href="xxx">ホーム</a>
          </li>
          <li>
            <a href="xxx">保存済み</a>
          </li>
          <li>
            <a href="xxx">履歴</a>
          </li>
        </ul>
      </div>
      <div className="textbox">
        <input className="subTitle" placeholder="件名を入力"></input>
        <input className="text" placeholder="本文を入力"></input>
      </div>
      <div className="tags">
        <button className="addTag" placeholder="add tags"></button>
      </div>
      <div className="button">
        <button className="post">作成する</button>
        <button className="save">下書きに保存</button>
      </div>
    </>
  );
}
