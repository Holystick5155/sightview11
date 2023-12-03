import React, { useEffect, useState } from "react";

import SocialMedia from '../social/SocialMedia';
import Tpost from '../tpost/Tpost';
import './side.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from '../../heading/Heading';

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../actions/PostsAction";

const Side = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer);
    let { posts, loading } = useSelector((state) => state.postReducer);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);


    if (!posts) return '';

    // const sortgallery = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const PF = "http://localhost:5022/images/";


    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 1,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const category = ["world", "travel", "sports", "fun", "health", "fashion", "business", "technolgy"]

    return (
        <>
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

            <Tpost />

            <section className="categories" key={category}>
                <Heading title="Categories" />

                {category.map((val) => {
                    return (
                        <div className="category category1" key={val}>
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>

            <section className="gallery">
                <Heading title="Gallery" />
                <Slider {...settings}>
                    {posts.map((val) => {
                        return (
                            <div className="img" key={val._id}>
                                <img src={PF + val.image} alt="" key={val._id} />
                            </div>
                        )

                    })}

                </Slider>
            </section>
        </>
    );
}

export default Side;
