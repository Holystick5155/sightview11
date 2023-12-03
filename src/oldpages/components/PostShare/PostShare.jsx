import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";
import { Link, useParams } from "react-router-dom";

const PostShare = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  // const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  //const desc = useRef();
  const [desc, setDesc] = useState("");
  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const serverPublic = "http://localhost:5009/images/";

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      authorPic: user.profilePicture,
      firstname: user.firstname,
      lastname: user.lastname
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <>

      <div className="PostShare">
        <Link to={`/profile/${user._id}`}>
          <img
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="Profile"
          />
        </Link>

        <div>
          <input
            type="text"
            placeholder="What's happening?"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery />
              Photo
            </div>

            <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <UilLocationPoint />
              Location
            </div>
            <div className="option" style={{ color: "var(--shedule)" }}>
              <UilSchedule />
              Shedule
            </div>
            <button
              className="button ps-button"
              onClick={handleUpload}
              disabled={loading || !desc || !image}
            >
              {loading ? "uploading" : "Share"}
            </button>

            <div style={{ display: "none" }}>
              <input type="file" ref={imageRef} onChange={onImageChange} />
            </div>
          </div>

          {image && (
            <div className="previewImage">
              <UilTimes onClick={() => setImage(null)} />
              <img src={URL.createObjectURL(image)} alt="preview" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
