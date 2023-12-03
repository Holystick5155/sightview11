import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Heading from "../../heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { likePost } from "../../../api/PostsRequests";
import { Link } from 'react-router-dom';
import './post.css';


const Post = ({ data }) => {

  //const { user } = useSelector((state) => state.authReducer.authData);
  // const [liked, setLiked] = useState(data.likes.includes(user._id));
  // const [likes, setLikes] = useState(data.likes.length);

  const serverPublic = "http://localhost:5022/images/";

  // const handleLike = () => {
  //   likePost(data._id, user._id);
  //   setLiked((prev) => !prev);
  //   liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  // };

  const [posts, setPosts] = useState([]);


  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     await axios.get("/api/posts")
  //       .then((res) => {
  //         setPosts(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };


  return (
    <>
      <Heading title="Posts" />
      <section className="post">
        <div className='items' key={data._id}>
          <div className="box shadow">
            <div className="images row">
              <div className="img">
                <img src={serverPublic + data.image} alt="" />
              </div>
              <div className="category category1">
                <span style={{ textTransform: "capitalize" }}>{data.category}</span>
              </div>
            </div>
            <div className="text row">
              <Link to={`/singlepage/${data._id}`} style={{ textDecoration: 'none' }}>
                <h1 className="title" key={data._id}>
                  {data.title}...
                </h1>
              </Link>
              <div className="date">
                <label htmlFor="">{new Date(data.createdAt).toDateString()}</label>
              </div>
              <div className="comment">
                <i className="fa fa-comment"></i>
                <label htmlFor="">{data.comment}</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;