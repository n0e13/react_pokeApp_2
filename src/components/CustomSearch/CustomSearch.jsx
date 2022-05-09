import React from "react";

const CustomSearch = (props) => {
  return (
    <div>
      <input type="text" placeholder="Search" onChange={props.onChange}/>
    </div>
  );
};

export default CustomSearch;
