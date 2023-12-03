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
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';


const PostShare = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  // const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  //const desc = useRef();
  const [imageDesc, setImageDesc] = useState("");
  const [title, setTitle] = useState("");
  const [teaser, setTeaser] = useState("");
  const [category, setCat] = useState("");
  const [tags, setTags] = useState("");
  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const serverPublic = "http://localhost:5022/images/";


  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const [convertedContent, setConvertedContent] = useState(null);
  const [content, setContent] = useState(null);


  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    setContent(editorState);
    setConvertedContent(convertContentToHTML)
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }


  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };


  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      author: user.username,
      title: title,
      teaser: teaser,
      desc: convertedContent,
      imageDesc: imageDesc,
      category: category,
      tags: tags.split(',').map((tag) => tag.trim),
      authorPic: user.profilePicture,
      firstname: user.firstname,
      lastname: user.lastname,
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
    convertedContent.current.value = "";
  };

  return (
    <>

      <div className="PostShare">
        {/* <Link to={`/profile/${user._id}`}>
          <img
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="Profile"
          />
        </Link> */}

        <div>
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Teaser"
            required
            value={teaser}
            onChange={(e) => setTeaser(e.target.value)}
          />
          <select
            required
            value={category}
            onChange={(e) => setCat(e.target.value)}
          >
            <option>
              Select category
            </option>
            <option value="news">
              General News
            </option>
            <option value="politics">
              Politics
            </option>
            <option value="agriculture">
              Agriculture
            </option>
            <option value="food">
              Food and Nutrition
            </option>
            <option value="entertainment">
              Entertainment
            </option>
            <option value="business">
              Business
            </option>
            <option value="eduction">
              Education
            </option>
            <option value="technology">
              Technology
            </option>
            <option value="computers">
              Computers
            </option>
            <option value="sports">
              Sports
            </option>
          </select>
          <input
            type="text"
            placeholder="Tags"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image description"
            required
            value={imageDesc}
            onChange={(e) => setImageDesc(e.target.value)}
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

            {/* <div className="option" style={{ color: "var(--video)" }}>
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
            </div> */}
            <button
              className="button ps-button"
              onClick={handleUpload}
              disabled={loading || !convertedContent || !image}
            >
              {loading ? "uploading" : "Share"}
            </button>

            <div style={{ display: "none" }}>
              <input type="file" ref={imageRef} onChange={onImageChange} />
            </div>
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
      <Editor
        stripPastedStyles={true}
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorStyle={{
          height: 200,
          margin: 12,
          padding: 10,
          borderWidth: 0.5,
          borderRadius: "5px",
        }}
        wrapperStyle={{
          width: "95%",
          margin: '5%',
          marginLeft: "auto",
          marginRight: "auto"
        }}

        placeholder="Description"
      />

      <div className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div>

    </>
  );
};

export default PostShare;
