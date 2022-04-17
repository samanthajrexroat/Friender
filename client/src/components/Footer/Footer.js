import React from "react";
import "../../assets/index.css";
import "./footer.css";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="commentContainer">
          <div className="commentCard">
            <div className="cardHead">
              <h2>Mark K</h2>
            </div>
            <p className="cardBody">
              I was feeling lonely back in my hometown because most of my
              friends had created new friendships or moved while I was abroad. I
              both decided to download Friender and see what happened. Without
              the app we may have never met and embarked on this wild, wonderful
              journey. Thank you for bringing us and so many other friends
              together around the world. I will forever be grateful.
            </p>
          </div>

          <div className="commentCard">
            <div className="cardHead">
              <h2>Mary & </h2>
            </div>
            <p className="cardBody">
              I was feeling lonely back in my hometown because most of my
              friends had created new friendships or moved while I was abroad. I
              both decided to download Friender and see what happened. Without
              the app we may have never met and embarked on this wild, wonderful
              journey. Thank you for bringing us and so many other friends
              together around the world. I will forever be grateful.
            </p>
          </div>
          <div className="commentCard">
            <div className="cardHead">
              <h2>Joseph D</h2>
            </div>
            <p className="cardBody">
              I was feeling lonely back in my hometown because most of my
              friends had created new friendships or moved while I was abroad. I
              both decided to download Friender and see what happened. Without
              the app we may have never met and embarked on this wild, wonderful
              journey. Thank you for bringing us and so many other friends
              together around the world. I will forever be grateful.
            </p>
          </div>
        </div>
        <p className="appDescription">
          There really is something for everyone on Friender. Want to get into
          go rock climbing? You got it. Trying to find some new friends? Say no
          more. New kid on campus and looking to make the most of your college
          experience? Friender has you covered. Friender is not your average
          facebook — it is the most diverse hobbies/friend app, where adults of
          all backgrounds and experiences are invited to make connections,
          memories, and everything in between.
        </p>
      </div>
      <FooterSocial />
    </footer>
  );
};

export default Footer;
