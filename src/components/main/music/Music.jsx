import React from 'react';

import './music.css'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../../actions/PostsAction";
import Heading from '../../heading/Heading';


const Music = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer);
    let { posts, loading } = useSelector((state) => state.postReducer);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);


    if (!posts) return '';

    const showheading = posts.filter(val => val.category === "entertainment");


    const PF = "http://localhost:5022/images/";

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
        autoPlay: true,
        autoPlaySpeed: 2000,
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
            {showheading.length === 0 ? "" : <Heading title="Music" />}
            <Slider {...settings}>
                {posts.filter((val) => val.category === "entertainment").map((val) => (
                    <section className="music" key={val._id}>
                        <div className="musicbox" key={val._id}>
                            <div className="musicimage">
                                <img src={PF + val.image} alt="" />
                            </div>
                            <div className="text">
                                <Link to={`/posts/${val._id}`} style={{ textDecoration: 'none' }}>
                                    <h1 className="title">{val.title.slice(0, 25)}...</h1>
                                </Link>
                            </div>

                        </div>
                    </section>
                ))}
            </Slider>
        </>
    );
}

export default Music;
