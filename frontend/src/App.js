import { Component, Fragment } from "react";
import AddPhoto from "./components/AddPhoto";
import Header from "./components/Header";
import MasonryGrid from "./components/Masonry";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header /> 
        <MasonryGrid />
        <AddPhoto />
      </Fragment>
    )
  }
}
