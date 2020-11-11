import { Component, Fragment } from "react";
import Header from "./components/Header";
import MasonryGrid from "./components/Masonry";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header /> 
        <MasonryGrid />
      </Fragment>
    )
  }
}
