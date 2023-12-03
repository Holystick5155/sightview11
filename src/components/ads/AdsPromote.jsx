import React from 'react';

import '../discover/discover.css'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../actions/PostsAction";
import Heading from '../heading/Heading';


const AdsPromote = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer);
    let { posts, loading } = useSelector((state) => state.postReducer);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);


    if (!posts) return '';




    const PF = "http://localhost:5022/images/";

    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 1,
        speed: 500,
        rows: 1,
        slidesPerRow: 6,
        dots: true,
        autoPlay: true,

        autoPlaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 3,
                    infinite: true,
                    dots: true
                }
            },

        ]
    };

    return (
        <>
            <Slider {...settings}>
                {posts.map((val) => (
                    <section className="discover" key={val._id}>
                        <div className="box" key={val._id}>
                         {val.desc}
                        </div>
                    </section>
                ))}
            </Slider>
        </>
    );
}

export default AdsPromote;
