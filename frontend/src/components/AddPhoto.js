import React, { Component, Fragment } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import { createPhoto } from "../services/apis";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        label: "",
        imageUrl: "",
      }
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  addPhoto = () => {
    const { data } = this.state;
    createPhoto(data).then((response) => {
      const { updatePhotos, handleClose } = this.props;
      updatePhotos(response.data.data);
      handleClose();
    })
  }

  render() {
    const { show, handleClose } = this.props;
    const { label, imageUrl } = this.state;
    return (
      <Fragment>
        <Modal size="lg" centered show={show} onHide={handleClose}>
          <Container>
            <Row>
              <Col xs={12}>
                <Modal.Header className="border-bottom-0 pb-0">
                  <Modal.Title className="h5">Add a new photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Lorem ipsum"
                      name="label"
                      value={label}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      type="url"
                      placeholder="https://www.example.com/"
                      name="imageUrl"
                      value={imageUrl}
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-top-0 pt-0">
                  <Button variant="link" onClick={handleClose}>
                    Cancel
                </Button>
                  <Button className="btn-green" onClick={this.addPhoto}>
                    Submit
                </Button>
                </Modal.Footer>
              </Col>
            </Row>
          </Container>
        </Modal>
      </Fragment>
    );
  }
}

export default AddPhoto;