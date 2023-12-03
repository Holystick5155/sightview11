import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import './hero.css';

const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className="container">
            <Card />
        </div>
      </section>
    </>
  );
}

export default Hero;

