import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button className="like-button" onClick={handleLike}>
      <svg
        width="29"
        height="28"
        viewBox="0 0 38 35"
        fill={liked ? "#E94B42" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.9967 6.72289C32.188 5.97769 31.2278 5.38654 30.171 4.98322C29.1142 4.5799 27.9815 4.37231 26.8375 4.37231C25.6936 4.37231 24.5609 4.5799 23.504 4.98322C22.4472 5.38654 21.4871 5.97769 20.6784 6.72289L19 8.26873L17.3217 6.72289C15.6882 5.21834 13.4727 4.37309 11.1625 4.37309C8.85239 4.37309 6.63687 5.21834 5.00336 6.72289C3.36985 8.22744 2.45215 10.2681 2.45215 12.3958C2.45215 14.5236 3.36985 16.5642 5.00336 18.0687L19 30.9604L32.9967 18.0687C33.8058 17.3239 34.4476 16.4395 34.8855 15.4661C35.3234 14.4927 35.5488 13.4494 35.5488 12.3958C35.5488 11.3422 35.3234 10.2989 34.8855 9.3255C34.4476 8.35212 33.8058 7.46775 32.9967 6.72289Z"
          stroke="#1E1E1E"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default LikeButton;
