import React from "react";
import PropTypes from "prop-types";

function Weekday(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p><strong>{props.location}</strong></p>
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