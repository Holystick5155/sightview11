import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="box">
          <div className="logo">
            <img src="../assets/img/logo.png" alt="" />

            <p>You can reach us through: </p>
          </div>
          <i className="fa fa-envelope"></i>
          <span> bridoh707@gmail.com </span> <br />
          <i className="fa fa-headphones"></i>
          <span> +233 243903271</span>
        </div>

        <div className="box">
          <h3>CATEGORIES</h3>
          <div className="item">
            <h3>Continents</h3>
            <ul>
              <li>Africa</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Australia</li>
              <li>America</li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div className="item">
            <br />
            <h3>Type</h3>
            <ul>
              <li>General</li>
              <li>Politics</li>
              <li>Business</li>
              <li>Education</li>
              <li>Entertainment</li>
            </ul>

          </div>
        </div>

        <div className="box">
          <h3>LABELS</h3>
          <ul>
            <li><span>Boxing<label >(5)</label></span></li>
          </ul>
          <ul>
            <li><span>Fashion<label >(6)</label></span></li>
          </ul>
          <ul>
            <li><span>Health<label >(7)</label></span></li>
          </ul>
          <ul>
            <li><span>Nature<label >(9)</label></span></li>
          </ul>
        </div>
      </div>

      <div className="legal">
        <p><i className='fa fa-copyright' />
          AMEST INC - GHANA
        </p>
      </div>
    </>
  );
}

export default Footer;
