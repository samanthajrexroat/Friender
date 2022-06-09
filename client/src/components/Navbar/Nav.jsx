// import React, { PrimaryBtn } from "react";
// import "./nav.css";
// import { TiThMenuOutline } from "react-icons/ti";
// import { Link, useNavigate } from "react-router-dom";
// // import PrimaryBtn from "../PrimaryBtn";

// import Auth from "../../utils/auth";

// const Nav = PrimaryBtn => {
//   // const authToken = true;
//   const logout = event => {
//     event.preventDefault();
//     console.log("cookie here!!!");
//     Auth.logout();
//     console.log("cookie gone!!!");
//   };

//   let navigate = useNavigate();

//   return (
//     <>
//       {PrimaryBtn}
//       <nav className="navInline">
//         <div className="logoContainer">
//           <h1>
//             <TiThMenuOutline /> Frendr®{" "}
//           </h1>
//         </div>
//         <div className="inline">
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="primary-btn me" to="/me">
//                 View Profile
//               </Link>

//               <Link to="/">
//                 <button
//                   className="primary-btn logout"
//                   onClick={() => {
//                     Auth.logout();
//                     navigate("/", { replace: true });
//                   }}
//                 >
//                   Logout
//                 </button>
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link className="primary-btn" to="/LogIn">
//                 LogIn
//               </Link>
//               <Link className="primary-btn none" to="/SignUp">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;

// ONLY EDIT BELOW THIS LINE

import React, { useState } from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";

import Auth from "../../utils/auth";

const Nav = () => {
  // const authToken = true;
  const logout = event => {
    event.preventDefault();
    console.log("cookie here!!!");
    Auth.logout();
    console.log("cookie gone!!!");
  };

  let navigate = useNavigate();

  return (
    <nav className="navInline">
      <div className="logoContainer">
        <h1>
          <TiThMenuOutline /> Frendr{" "}
        </h1>
      </div>
      <div className="inline">
        {Auth.loggedIn() ? (
          <>
            <Link className="primary-btn me" to="/me">
              View Profile
            </Link>

            <Link to="/">
              <Button
                onClick={() => {
                  Auth.logout();
                  navigate("/", { replace: true });
                }}
                type="button"
              >
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link className="primary-btn" to="/LogIn">
              LogIn
            </Link>
            <Link className="primary-btn none" to="/SignUp">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
