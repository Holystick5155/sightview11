import React, { useState } from "react";
import "./RightSide.css";

// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../heading/Heading";
import SocialMedia from "./social/SocialMedia";
import Tpost from "./tpost/Tpost";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    dots: false,
  };

  const category = ["world", "travel", "sports", "fun", "health", "fashion", "business", "technolgy"]

  return (
    <div className="RightSide">
      <Heading title="Stay Connected" />
      <SocialMedia />

      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">
          Subscribe to our News Stories
        </h1>
        <form action="">
          <input type="email" placeholder='Email Address...' />
          <button>
            <i className="fa fa-paper-plane"></i>Submit
          </button>
        </form>
      </section>

      <section className="banner">
        <img src="headerImage.jpg" alt="" />
      </section>

      {/* <Tpost /> */}

      <section className="categories">
        <Heading title="Categories" />
        <div className="category category1">
          <span>Music</span>
        </div>
        {/* {category.map((val) => {
                return (
                    
                )
            })} */}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {/* {gallery.map((val) => {
                return (
                    
                )
            })} */}
          <div className="img">
            <img src="headerImage.jpg" alt="" />
          </div>
          <div className="img">
            <img src="headerImage.jpg" alt="" />
          </div>
          <div className="img">
            <img src="headerImage.jpg" alt="" />
          </div>
          <div className="img">
            <img src="headerImage.jpg" alt="" />
          </div>
        </Slider>
      </section>

    </div>
  );
};

export default RightSide;
