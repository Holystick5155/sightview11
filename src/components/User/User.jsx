import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../../actions/UserAction";

const User = ({ person }) => {
  //const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const serverPublic = "http://localhost:5022/images/";

  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>

        <Link to={`/profile/${person._id}`}>
          <img
            src={
              serverPublic + person.profilePicture
                ? serverPublic + person.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="profile"
            className="followerImage"
          />
        </Link>

        <div className="name">
          <Link to={`/profile/${person._id}`}>
            <span>{person.firstname}</span>
          </Link>
          <span>{person.username}</span>
        </div>


      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
