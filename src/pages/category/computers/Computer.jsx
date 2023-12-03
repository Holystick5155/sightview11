
import { Col, Container, Row, Spinner, ListGroup } from "react-bootstrap";
import Discover from '../../home/discover/Discover';
import Hero from '../../home/hero/Hero';
import Side from '../../home/sideContent/side/Side';
// import { LinkContainer } from "react-router-bootstrap";

// import MainArticle from '../components/mainArticle/MainArticle';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './computer.css';


const Computer = () => {
  //const sidebarArticles = articles?.slice(0, 4) || [];

  const [posts, setPosts] = useState([]);

  const PF = "http://localhost:5030/images/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("/api/posts")
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
    rows: 5,
    slidesPerRow: 2,
    dots: true,
  };

  return (
    <div>
      <Container>

        <div className="container">
          <Hero />
          <section className="mainContent">


            <div className="content">
              <Slider {...settings}>
                {posts.filter((val) => val.category === "computers").map((val) => (

                  <div className='items'>
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
                            {val.title.slice(0, 40)}...
                          </h1>
                        </Link>

                        <div className="date">
                          <i className="fas fa-calendar-day"></i>
                          <label htmlFor="">{val.createdAt}</label>
                        </div>
                        <p className="desc">
                          {val.description.slice(0, 250)}...
                        </p>
                        <div className="comment">
                          <i className="fas fa-share"></i>
                          <label htmlFor=""> Share </label>

                          <i className="fas fa-comment"></i>
                          <label htmlFor=""> Comment </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </Container>

    </div>
  );
};

export default Computer;