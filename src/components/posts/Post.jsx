import React, { useState } from "react";
import "./post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)


  const serverPublic = "http://localhost:5022/images/";

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
          infinite: true,
          dots: true
        }
      },

    ]
  };

  return (
    <>
      {/* <div className="Post">
        <div className="author"> */}
      {/* <Link to={`/profile/${data.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
          <img src={data.authorPic ? serverPublic + data.authorPic : ""} alt="author" />
          <span className="authorName">{data.firstname} {data.lastname} </span>
        </Link> */}

      {/* <br />
          <span className="createdAt">{new Date(data.createdAt).toDateString()}</span>

        </div>
        <div className="detail">
          <span>
            <b>{data.name} </b>
          </span>
          <span>{data.desc}</span>
        </div>
        <img
          src={data.image ? serverPublic + data.image : ""}
          alt=""
        />
        <div className="postReact">
          <img
            src={liked ? Heart : NotLike}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={handleLike}
          />
          <img src={Comment} alt="" />
          <img src={Share} alt="" />
        </div>
        <span style={{ color: "var(--gray)", fontSize: "12px" }}>
          {likes} likes
        </span>
      </div> */}
      <>
        <Slider {...settings}>
          <section className="post">
            <div className='items' key={data._id}>
              <div className="box shadow">
                <div className="row">
                  <div className="images">
                    <img src={serverPublic + data.image} alt="" />
                  </div>
                  <div className="category category1">
                    <span>{data.category}</span>
                  </div>
                </div>
                <div className="text row">
                  <Link to={`/singlepage/${data._id}`} style={{ textDecoration: 'none' }}>
                    <h1 className="title" key={data._id}>
                      {data.title.slice(0, 40)}...
                    </h1>
                  </Link>
                  <div className="desc">
                    {data.desc.slice(0, 200)}...
                  </div>
                  <div className="date">
                    <i className="fa fa-calendar-day"></i>
                    <label htmlFor="">{new Date(data.createdAt).toDateString()}</label>
                  </div>
                  <div className="comment">
                    <i className="fa fa-comment"></i>
                    <label htmlFor=""> comment</label>
                  </div>
                </div>
                <div className="postReact">
                  <img
                    src={liked ? Heart : NotLike}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={handleLike}
                  />
                  <img src={Comment} alt="" />
                  <img src={Share} alt="" />
                </div>
                <span style={{ color: "var(--gray)", fontSize: "12px" }}>
                  {likes} likes
                </span>
              </div>
            </div>
          </section>
        </Slider>
      </>
    </>
  );
};

export default Post;
