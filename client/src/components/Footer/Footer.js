import React from "react";
import "../../assets/index.css";
import "./footer.css";
import FooterSocial from "./FooterSocial";
import CommentsData from "./commentsData";

const Footer = () => {
<<<<<<< HEAD
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
      <FooterSocial />
    </footer>
  );
=======
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
			<FooterSocial />
		</footer>
	);
>>>>>>> origin
};

export default Footer;
