import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import MasonryGrid from "../components/Masonry";
import { getPhotos } from "../services/apis";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    getPhotos().then((response) => {
      this.setState({
        photos: response.data
      })
    });
  }

  updatePhotos = (photo) => {
    const { photos } = this.state
    this.setState({
      photos: [photo, ...photos]
    })
  }

  render() {
    const { photos } = this.state
    return (
      <Fragment>
        <Header updatePhotos={this.updatePhotos} />
        <MasonryGrid photos={photos} />
      </Fragment>
    );
  }
}

export default Home;