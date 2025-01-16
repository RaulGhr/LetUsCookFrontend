import React from 'react';
import "./LineUserFollowDetails.style.scss";

import { useAuth } from "../../contexts/authContext";
import { unfollowUser } from "../../services/creators.api";


const LineUserFollowDetails = ({ user, onButtonClick=null }) => {
    const {token} = useAuth();

  const onButtonClickHandler = async () => {
    try {
      await unfollowUser(user.id, token);
      onButtonClick();
      
    } catch (error) {
      console.error("Error unfollowing user:", error);
    }
  };


  return (
    <div className='LineUserFollowDetails'>
      <img src={user.profileImage} alt="" />
      <h3>{user.username}</h3>
      {onButtonClick && <button onClick={onButtonClickHandler}>Unfollow</button>}
    </div>
  );
};

export default LineUserFollowDetails;

