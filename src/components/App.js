import React from "react";
// import Header from "./Header.js"; 
import HomePage from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="box">
          <HomePage />
        </div>
        {/* <Header /> */}
      </div>  
    </React.Fragment>
  );
}

export default App;
