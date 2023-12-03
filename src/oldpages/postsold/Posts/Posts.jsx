import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./posts.css"

import Post from "../Post/Post";

import Heading from "../../heading/Heading";

const Posts = () => {
    const params = useParams()
    const dispatch = useDispatch();
    

    let { posts, loading } = useSelector((state) => state.postReducer);

   

    if (!posts) return ' ';
    console.log(posts);


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
                    slidesPerRow: 1,
                    infinite: true,
                    dots: true
                }
            },

        ]
    };

    return (

        <div className="posts">
            <Heading title="New Posts" />
            <Slider {...settings}>
                {loading
                    ? "Fetching posts...."
                    : posts.map((post) => {
                        return <Post data={post} />;
                    })}
            </Slider>
        </div>
    )
}
export default Posts;