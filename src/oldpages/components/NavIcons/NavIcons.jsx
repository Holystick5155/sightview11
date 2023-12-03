import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./navicons.css";

const NavIcons = () => {
  return (
    <>
      <Head />
      <div className="navIcons">
        <Link to="../home">
          Home
        </Link>
        <Link to="../home">
          Computers
        </Link>
        <Link to="../chat">
          Music
        </Link>
        <UilSetting />
      </div>
    </>

  );
};

export default NavIcons;
