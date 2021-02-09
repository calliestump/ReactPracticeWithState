// Child component to Availability
import React from "react";
import PropTypes from "prop-types";

function Month(props){
  let newString = ""; 
  for (let i = 0 ; i < props.selection.length; i++) {
    if(i === props.selection.length - 1) {
      newString += props.selection[i]; 
    }
    else {
      newString += props.selection[i] + ", "; 
    }
  }
  return (
    <React.Fragment>
      <strong><p>{props.monthName}</p></strong>
      <p>{newString}</p>
      <hr/>
    </React.Fragment>
  );
}

Month.propTypes = {
  monthName: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired 
};

export default Month;
