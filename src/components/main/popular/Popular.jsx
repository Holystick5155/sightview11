import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popular.css";
import { Link } from 'react-router-dom';
import Heading from "../../heading/Heading";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../actions/PostsAction";

const Popular = () => {

  const params = useParams()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);


  if (!posts) return ' ';

  const PF = "http://localhost:5022/images/";

  const showheading = posts.filter(val => val.category === "computers");

  const sorted = showheading.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

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
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          dots: true
        }
      },

    ]
  };



  return (
    <>
      {showheading.length === 0 ? "" : <Heading title="Popular" />}
      <Slider {...settings}>
        {sorted.filter((val) => val.category === "computers").map((val) => (
          <section className="popular" key={val._id}>
            <div className='items' key={val._id}>
              <div className="box shadow">
                <div className="row">
                  <div className="images">
                    <img src={PF + val.image} alt="" />
                  </div>
                  <div className="category category1">
                    <span>{val.category}</span>
                  </div>
                </div>
                <div className="text row">
                  <Link to={`/posts/${val._id}`} style={{ textDecoration: 'none' }}>
                    <h1 className="title" key={val._id}>
                      {val.title.slice(0, 40)}...
                    </h1>
                  </Link>
                  <div className="desc" dangerouslySetInnerHTML={{ __html: val.teaser.slice(0, 50) }} />
                  <div className="date">
                    {/* <i className="fa fa-calendar-day"></i> */}
                    <label htmlFor="">{new Date(val.createdAt).toDateString()}</label>
                  </div>
                  <div className="comment">
                    {/* <i className="fa fa-comment"></i> */}
                    <label htmlFor=""> comment</label>
                  </div>
                </div>
              </div>
            </div>


          </section>
        ))}
      </Slider>
    </>
  );
}

export default Popular;
