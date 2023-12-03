import React from 'react';
import './life.css';
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';




const Life = () => {
  const [posts, setPosts] = useState([]);

  const PF = "http://localhost:5022/images/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("/")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },

    ]
  };
  return (
    <>
      <section className="life">
        {/* <Heading title="Life Style" /> */}
        <Slider {...settings}>
          {posts.filter((val) => val.category === "computers").map((val) => (
            <div className='items' key={val._id}>
              <div className="box shadow">
                <div className="images">
                  <div className="img">
                    <img src={PF + val.photo} alt="" />
                  </div>
                  <div className="category category1">
                    <span>{val.category}</span>
                  </div>
                </div>
                <div className="text">
                  <Link to={`/singlepage/${val._id}`} style={{ textDecoration: 'none' }}>
                    <h1 className="title" key={val._id}>
                      {val.title.slice(0, 60)}...
                    </h1>
                  </Link>
                </div>
                <div className="date">
                  <i className="fa fa-calendar-day"></i>
                  <label htmlFor="">{new Date(val.createdAt).toDateString()}</label>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Life;
