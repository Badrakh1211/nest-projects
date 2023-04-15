import React, { useState } from "react";
import "./post-page-p2.css";
import data from "../data/data";
import image from "../downloads/pagep2.jpg";
import man from "../downloads/Avatar.jpg";

function Information() {
  const { userProfilePic, texts, date, userName } = data[0];

  return (
    <div className="post-comp-p2">
      <h1 className="post-title-p2">{data[0]?.title}</h1>
      <Profile image={userProfilePic} date={date} userName={userName} />
      <img className="postp2" alt="" src={image} />
      <Texts texts={texts} />
      <Profile
        image={userProfilePic}
        date={date}
        userName={userName}
        bottom={true}
      />
      <div className="linep2"></div>
      <Comment />
    </div>
  );
}

const Profile = (props) => {
  const { image, userName, date, bottom = false } = props;
  return (
    <div className="profilep2">
      <img
        className="post-profile-pic-p2"
        width={"56px"}
        height={"56px"}
        alt=""
        src={image}
      />
      {bottom ? (
        <div className="bottomProfile">
          <p style={{ color: "black" }}>Written by</p>
          <p className="bottom-userp2">{userName}</p>
          <p>CEO Team App</p>
        </div>
      ) : (
        <>
          <p>{userName}</p>
          <p>{date}</p>
        </>
      )}
      {/* <div
        className="writtenp2"
        style={{ display: bottom ? "flex" : "", flexDirection: "column" }}
      >
        <p c>Written by</p>
        <p>{userName}</p>
        <p>CEO Team App</p>
      </div> */}
    </div>
  );
};

const Texts = (props) => {
  const { texts } = props;
  return (
    <div className="text-father">
      {texts.map((text) => (
        <p className="postp2-text" key={text}>
          {text}
        </p>
      ))}
    </div>
  );
};
const Comment = (props) => {
  const [input, setInput] = useState("");
  const [change, setChange] = useState([]);
  function newElement() {
    setChange([...change, input]);
  }
  return (
    <div className="commentp2">
      <h5>Join the conversation</h5>
      <div className="commentuserp2">
        <img className="manp2" src={man} alt="" />
        <div
          style={{
            display: "flex",
            height: "fit-content",
            flexDirection: "column",
          }}
        >
          <input
            onKeyDown={(e) => e.key === "Enter" && newElement()}
            onChange={(e) => setInput(e.target.value)}
            className="comment-p2-input"
            placeholder="Comments"
          />
          <div className="commentp2-new">
            {change.map((e) => (
              <input className="newcommentp2" value={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
