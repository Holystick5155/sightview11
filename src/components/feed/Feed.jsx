import React, { useContext, useEffect, useState } from "react";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../App";
import Heading from "../heading/Heading";


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/");
      console.log("My posts", res);
      setPosts(res.data);
      console.log("Posts", posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <Heading title="Feed" />
      <div className="feedWrapper">
        {/* {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
      </div>
    </div>
  );
}

export default Feed;