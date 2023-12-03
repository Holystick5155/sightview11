import React from 'react';
import Heading from '../../heading/Heading';

import './tpost.css';

const Tpost = () => {
    return (
        <>
            <section className="tpost">
                <Heading title="Livee" />

                {/* {tpost.map((val) =>{
            return 
        })} */}
                <div className="box flexSB">
                    <div className="img">
                        <img src="headerImage.jpg" alt="" />
                    </div>
                    <div className="text">
                        {/* <h1 className="title">{val.title.slice(0, 35)}...</h1> */}
                        title
                        <span>a year ago</span>
                    </div>
                </div>
                <div className="box flexSB">
                    <div className="img">
                        <img src="headerImage.jpg" alt="" />
                    </div>
                    <div className="text">
                        {/* <h1 className="title">{val.title.slice(0, 35)}...</h1> */}
                        title
                        <span>a year ago</span>
                    </div>
                </div>
                <div className="box flexSB">
                    <div className="img">
                        <img src="headerImage.jpg" alt="" />
                    </div>
                    <div className="text">
                        {/* <h1 className="title">{val.title.slice(0, 35)}...</h1> */}
                        title
                        <span>a year ago</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tpost;
