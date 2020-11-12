import React, { Component, Fragment } from "react";
import { MdSearch } from 'react-icons/md';
import AddPhoto from "./AddPhoto";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  updatePhotos = (photo) => {
    this.props.updatePhotos(photo)
  }

  render() {
    const { showModal } = this.state
    return (
      <Fragment>
        <header>
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-md-3">
                <div className="has-search">
                  <MdSearch className="input-icon" />
                  <input type="text" className="form-control" placeholder="Search by name" />
                </div>
              </div>
              <div className="col-md-6 col-6 d-flex justify-content-center">
                <h5 className="mb-0">My unsplash</h5>
              </div>
              <div className="col-md-3 col-3 d-flex justify-content-end">
                <button className="btn btn-green" onClick={this.toggleModal}>Add a photo</button>
              </div>
            </div>
          </div>
        </header>
        <AddPhoto show={showModal} handleClose={this.toggleModal} updatePhotos={this.updatePhotos} />
      </Fragment>
    );
  }
}

export default Header;