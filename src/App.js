import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";


// Material UI Imports
import { createMuiTheme } from "@material-ui/core/styles";

// Component Imports
import AppBar from "./components/AppBar";
import FooterBar from "./components/FooterBar";
// Page Imports
import HomePage from "./components/pages/HomePage";
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const theme = createMuiTheme(this.props.settings);

    return (
      <div>
        <AppBar />
        <HomePage />
        <FooterBar />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

const mapDispatchToProps = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
