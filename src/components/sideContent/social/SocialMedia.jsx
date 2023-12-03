import React from 'react';
import '../side/side.css';

const SocialMedia = () => {
  return (
    <>
      <section className="social">
          <div className="socBox">
              <i className="fa fa-facebook"></i>
              <span>12,740 Likes</span>
          </div>
          <div className="socBox">
              <i className="fa fa-pinterest"></i>
              <span>5,640 Fans</span>
          </div>
          <div className="socBox">
              <i className="fa fa-twitter"></i>
              <span>22,740 Follows</span>
          </div>
          <div className="socBox">
              <i className="fa fa-instagram"></i>
              <span>42,740 Follows</span>
          </div>
          <div className="socBox">
              <i className="fa fa-youtube-play"></i>
              <span>9,740 Subscribers</span>
          </div>
      </section>
    </>
  );
}

export default SocialMedia;
