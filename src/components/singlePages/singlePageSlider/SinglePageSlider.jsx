
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singlePageSlider.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../actions/PostsAction";

const SinglePageSlider = () => {

  const params = useParams()
  const dispatch = useDispatch();
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);


  if (!posts) return ' ';

  const PF = "http://localhost:5022/images/";

  const sorted = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 6,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 3,
          infinite: true,
        }
      },

    ]
  };



  return (
    <>
      <Slider {...settings}>
        {sorted.map((val) => (
          <section className="singlePopular" key={val._id}>
            <div className='items' key={val._id}>
              <div className="box">
                <div className="images">
                  <img src={PF + val.image} alt="" />
                </div>
                <div className="text row">
                  <Link to={`/posts/${val._id}`} style={{ textDecoration: 'none' }}>
                    <h1 className="title" key={val._id}>
                      {val.title.slice(0, 40)}...
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </>
  );
}

export default SinglePageSlider;

