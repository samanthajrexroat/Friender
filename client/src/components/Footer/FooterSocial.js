import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";

const FooterSocial = () => {
  return (
    <div>
      <h3>SOCIAL</h3>
      <div>
        <a
          href="https://www.linkedin.com/in/matthew-todor-a9185062/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="footerSocialInline">
            Matthew Todor
            <BsLinkedin />
          </p>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/nickgraves17/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="footerSocialInline">
            Nick Graves
            <BsLinkedin />
          </p>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/samanthajrexroat/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="footerSocialInline">
            Sam Rexroat
            <BsLinkedin />
          </p>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/dugan-jo/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="footerSocialInline">
            Joseph Dugan
            <BsLinkedin />
          </p>
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
