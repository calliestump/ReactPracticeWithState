import React from "react";
import PropTypes from "prop-types";

function Weekday(props){
  return (
    <React.Fragment>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr />
    </React.Fragment>
  );
}

Weekday.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Weekday;