import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostSide = () => {

  return (
    <div className="PostSide">
      {/* <PostShare /> */}
      {/* <Posts /> */}
    </div>
  );
};

export default PostSide;
