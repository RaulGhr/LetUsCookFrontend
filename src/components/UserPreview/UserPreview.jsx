import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserPreviewStyle.scss";
const UserPreview = ({ Id, Username, Image }) => {
  const navigate = useNavigate();


  return (
    <div className="UserPreview" onClick={() => navigate(`/users?Id=${Id}`)}>
      <div className="imageContainer" style={{ backgroundImage: `url(${Image})` }}>
        <div className="overlay"></div>
      </div>
      <h3 className="username">{Username}</h3>
    </div>
  );
};

export default UserPreview;
