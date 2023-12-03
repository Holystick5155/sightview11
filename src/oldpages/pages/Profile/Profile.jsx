import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";

const Profile = () => {

  const params = useParams();
  const profileUserId = params.id;
  // const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
       
          <ProfileCard location='profilePage' />
      
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
