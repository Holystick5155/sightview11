import React from 'react';
import Heading from '../../heading/Heading';
import tiktok1 from "./tiktok1.jpg";
import tiktok2 from "./tiktok2.jpg";
import tiktok3 from "./tiktok3.jpg";
import tiktok4 from "./tiktok4.jpg";
import tiktok5 from "./tiktok5.jpg";

import './tpost.css';

const Tpost = () => {
    return (
        <>
            <section className="tpost">
                <Heading title="Tiktok Post" />

                {/* {tpost.map((val) =>{
            return 
        })} */}
                <div className="box flexSB">
                    <div className="img">
                        <img src={tiktok1} alt="" />
                    </div>
                    <div className="text">
                        {/* <h1 className="title">{val.title.slice(0, 35)}...</h1> */}
                        Jenny
                        <span>2 months ago</span>
                    </div>
                </div>
                <div className="box flexSB">
                    <div className="img">
                        <img src={tiktok2} alt="" />
                    </div>
                    <div className="text">
                        {/* <h1 className="title">{val.title.slice(0, 35)}...</h1> */}
                        Jenny
                        <span>2 months ago</span>
                    </div>
                </div>
                <div className="box flexSB">
                    <div className="img">
                        <img src={tiktok3} alt="" />
                    </div>
                    <div className="text">
                        {/* <h1 className="title">{val.title.slice(0, 35)}...</h1> */}
                        Jenny
                        <span>2 months ago</span>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Tpost;
