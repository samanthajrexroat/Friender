import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";

const FooterSocial = () => {
  return (
    <div className="container footerSocial">
      <a
        href="https://www.linkedin.com/in/dugan-jo/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/dugan-jo/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
        <VscCode />
      </a>
      <a
        href="mailto:joseph.michael.dugan@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default FooterSocial;
