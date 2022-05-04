import React from "react";

const CustomInput = (props) => {

  console.log(props.placeholder);

  return <input placeholder={props.placeholder} />;
};

export default CustomInput;
