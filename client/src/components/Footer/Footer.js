import React from "react";
import "../../assets/index.css";
import "./footer.css";
import FooterSocial from "./FooterSocial";
import CommentsData from "./commentsData";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="commentContainer">
          {/* <div className="commentCard"> */}
          {CommentsData.map(({ id, name, comments }) => {
            return (
              <div className="commentCard" key={id}>
                <h5>{name}</h5>
                <p>{comments}</p>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
      <hr />
      <div className="social">
        <p>
          People, listen up: If you’re looking for friends, want to start a
          band, or just keep it casual with group hikes, you need to be on
          Friender. With over 6 billon people in the world, it’s the place to be
          to meet your next best match. Let’s be real, the friendship landscape
          looks very different today, as most people are online. With Friender,
          the world’s most popular free Friend app, you have millions of other
          people at your fingertips and they’re all ready to meet someone like
          you. Whether you’re straight or in the LGBTQIA community, Friender is
          here for you.
          <br />
          <br />
          There really is something for everyone on Friender. Want to get into
          Rock Climbing? You got it. Trying to find a book club? Say no more.
          New kid on campus and looking to make the most of your college
          experience? Friender's got you covered. Friender isn’t your average
          site — it’s the most diverse Friend app, where adults of all
          backgrounds and experiences are invited to make connections, memories,
          and everything in between.
        </p>
        <br />
        <div className="footerInline">
          <div>
            <h3>LEGAL</h3>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookie Policy</p>
            <p>Intellectual Property</p>
          </div>
          <div>
            <h3>CAREERS</h3>
            <p>Careers Portal</p>
            <p>Tech Blog</p>
          </div>
          <div>
            <h3>COMPANY</h3>
            <a
              href="https://github.com/Ccatalyst"
              target="_blank"
              rel="noreferrer"
            >
              <p>Matthew Todor</p>
            </a>
            <a
              href="https://github.com/Thekid303"
              target="_blank"
              rel="noreferrer"
            >
              <p>Nick Graves</p>
            </a>
            <a
              href="https://github.com/samanthajrexroat"
              target="_blank"
              rel="noreferrer"
            >
              <p>Sam Rexroat</p>
            </a>
            <a
              href="https://github.com/dugan-jo"
              target="_blank"
              rel="noreferrer"
            >
              <p>Joseph Dugan</p>
            </a>
          </div>
          <div>
            <h3>SOCIAL</h3>
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
