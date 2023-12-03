import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './music.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Music = () => {
  const [posts, setPosts] = useState([]);

  const PF = "http://localhost:5022/images/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("/posts")
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
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
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
      <section className="music">
        {/* <Heading title="Music News" /> */}
        <div className="content">
          <Slider {...settings}>
            {posts.filter((val) => val.category === "computers").map((val) => (

              <div className='items' key={val._id}>
                <div className="box shadow flexSB">
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
                        {val.title.slice(0, 50)}...
                      </h1>
                    </Link>
                    <p className="desc">
                      {val.description.slice(0, 150)}...
                    </p>

                    <div className="date">
                      <i className="fas fa-calendar-day"></i>
                      <label htmlFor="">{new Date(val.createdAt).toDateString()}</label>
                    </div>

                    <div className="comment">
                      <span>
                        {/* <i className="fas fa-share"></i> */}
                        <label htmlFor="">Share</label>
                        </span>

                      <span>
                        {/* <i className="fas fa-comment"></i> */}
                        <label htmlFor="">Comment</label>
                        </span>
                    </div>
                  </div>
                </div>


              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Music;
