import React, { Component } from "react";
import {render} from "react-dom";
import styles from "../app"
import HomePage from "./homePage";

class Form extends Component {

  render () {
    return (
     <HomePage />
    );
  }
}
render(<Form />, document.getElementById("index"));