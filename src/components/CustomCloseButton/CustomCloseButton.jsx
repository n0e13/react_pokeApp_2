import React from "react";
import { useNavigate } from "react-router-dom";

const CustomCloseButton = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return <button onClick={handleClick}>X</button>;
};

export default CustomCloseButton;
