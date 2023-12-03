import React from 'react';
import './hero.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../../actions/PostsAction";
import Heading from '../../../../components/heading/Heading';

const Card = () => {

  const params = useParams()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);


  if (!posts) return ' ';

  const showheading = posts.filter(val => val.category === "entertainment");

  const sorted = showheading.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  console.log("All Entertainment", showheading);

  console.log("Sort by date", sorted);

  const PF = "http://localhost:5022/images/";

  const firstFour = sorted.slice(0, 4);
  console.log("First four", firstFour);


  return (
    <>
      {firstFour.map((item) => (

        <div className="box" key={item._id}>
          <div className="img">
            <img src={PF + item.image} alt="" />
          </div>
          <div className="text">
            <span className="category">{item.category}</span>
            <Link to={`/posts/${item._id}`
            }>
              <h1 className="titleBg">{item.title}</h1>
            </Link>
          </div>
          <div className="author flex">
            <span>By: {item.author}</span>
            <span>{new Date(item.createdAt).toDateString()}</span>
          </div>

        </div>

      ))}
    </>
  );
}

export default Card;
