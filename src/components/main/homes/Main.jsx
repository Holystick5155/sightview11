import React from 'react';
import './home.css';
import Popular from '../popular/Popular';
import Ppost from '../ppost/Ppost';
import Life from '../life/Life';
import Music from '../music/Music';
import Side from '../../sideContent/side/Side';
import Posts from '../../posts/Posts';
import Hero from '../hero/Hero';


const Main = () => {

  return (
    <>
      <Hero />
      <main>
        <div className="container">
          <section className="mainContent">
            <Posts />
            <Popular />
            <Ppost />
            <Life />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
}

export default Main;
