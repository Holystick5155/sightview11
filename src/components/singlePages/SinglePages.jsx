import React, { useEffect } from "react";
import "./singlePage.css"
import { useParams } from "react-router-dom";
import SinglePageSlider from "./singlePageSlider/SinglePageSlider";
import { useDispatch, useSelector } from "react-redux";
import Side from "../sideContent/side/Side";
import { deletePost } from "../../actions/PostsAction";
import Footer from "../footer/Footer";
import AdsPromote from "../ads/AdsPromote";

const SinglePages = () => {
    const postId = useParams();
    const dispatch = useDispatch();

    const PF = "http://localhost:5022/images/";
    // const post = useSelector(state => state.posts.find(post => post.id === postId));

    //const { post } = useSelector(state => state.postReducer.find(post => post._id === postId));
    let { posts, loading } = useSelector((state) => state.postReducer);
    const user = useSelector((state) => state.authReducer.authData);

    const post = posts.find((post) => post._id === postId.id)
    // const postCreator = users.find((postCreator) => postCreator._id === post.userId)

    if (post) {
        window.scrollTo(0, 0);
    }

    const bodyParagraphs = post.desc ? post.desc.split('<p>') : [];
    const parser = new DOMParser();


    const parsedContent = parser.parseFromString(post.desc, 'text/html') //<div dangerouslySetInnerHTML={{ __html: post.desc }} />;

    const paragraphs = Array.from(parsedContent.querySelectorAll('p'))//parsedContent ? parsedContent.split('<p>') : []; //props.children.filter(child => child.type === 'p');

    const contentWithAds = [];

    paragraphs.forEach((paragraph, index) => {
        contentWithAds.push(<p style={{ marginBottom: 10, fontSize: 16 }} key={`p-${index}`}> {paragraph.textContent}</p >);
        if ((index + 1) % 2 === 0) {
            //contentWithAds.push(<div style={{ marginBottom: 10 }} key={`ads-${index}`}> ADS GO HERE</div>)
            contentWithAds.push(<AdsPromote key={`ads-${index}`} />)
        }
    })

    const handleDelete = () => {
        try {
            dispatch(deletePost(post._id, user.user._id));
            console.log("POST DELETED")
        } catch (error) {

        }
    }
    return (
        <>

            <main>
                <SinglePageSlider />
                <div className="container">
                    {loading
                        ? "Fetching News...."
                        : (
                            <section className="details" key={post.id}>
                                <h1 className="title" style={{ textTransform: "uppercase" }}>{post.title}</h1>
                                <div className="author">
                                    <img src={PF + post.image} alt="" />
                                    <p style={{ textTransform: "capitalize" }}>By: {post.author}</p>

                                </div>

                                <div className="social">
                                    <div className="socBox">
                                        <i className="fa fa-facebook-square"></i>
                                    </div>
                                    <div className="socBox">
                                        <i className="fa fa-pinterest-square"></i>
                                    </div>
                                    <div className="socBox">
                                        <i className="fa fa-twitter-square"></i>
                                    </div>
                                    <div className="socBox">
                                        <i className="fa fa-instagram"></i>
                                    </div>
                                    <div className="socBox">
                                        <i className="fa fa-youtube-play"></i>
                                    </div>
                                </div>
                                {!user ? null : user.user._id === post.userId && user.user.isAdmin === true && <span onClick={handleDelete}>Delete news</span>}
                                <div className="teaser">
                                    <p>{post.teaser}</p>
                                </div>

                                <div className="detailCover">
                                    <img src={PF + post.image} alt="" className="cover" />
                                    {post.imageDesc.length === 0 ? null : <div className="imageDesc">
                                        {post.imageDesc}
                                    </div>}
                                </div>

                                <div className="descbot">
                                    <h1>{post.title}</h1>
                                </div>
                                {/* <div className="descbot">

                                    {bodyParagraphs.slice(0, 3).map((paragraph, index) => (

                                        <div style={{ marginBottom: "10px" }} key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></div>

                                    ))}
                                </div> */}
                                {contentWithAds}
                            </section>
                        )}

                    < section className="sideContent">
                        <Side />
                    </section>
                </div>

            </main>
            <Footer />

        </>
    );
};

export default SinglePages;

