import React from "react";
// import Header from "./Header";
import Availability from './Availability';
import Schedule from './Schedule'; 

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }; 
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <Schedule />;
      buttonText = "Go to availability page";
    } else {
      currentlyVisibleState = <Availability />;
      buttonText = "Go to schedule page";
    }
    return ( 
      <React.Fragment>
        {/* <Header /> */}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default HomePage;