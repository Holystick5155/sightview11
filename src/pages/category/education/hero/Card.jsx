import React from 'react';
import './hero.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {

  const PF = "http://localhost:5030/images/";
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("/api/posts")
      .then((res) => {
        setItems(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {items.map(item => {
        <div className="box">
          <div className="img">
            <img src={PF + item.photo} alt="" />
          </div>
          <div className="text">
            <span className="category">{item.cateory}</span>
            <Link to='#'>
              <h1 className="titleBg">{item.title}</h1>
            </Link>
          </div>
          <div className="author flex">
            <span>By: {item.authorName}</span>
            <span>{item.createdAt}</span>
          </div>

        </div>
      })}
    </>
  );
}

export default Card;
