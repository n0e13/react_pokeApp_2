import React from "react";

const CustomInput = (props) => {

  if (props.required) {
    return <input placeholder={props.placeholder} id={props.id} required />;
  } else {
    return <input placeholder={props.placeholder} id={props.id} />;
  }
};

export default CustomInput;
