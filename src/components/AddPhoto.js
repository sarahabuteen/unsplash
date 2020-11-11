import React, { Fragment } from "react";
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

const AddPhoto = ({ show, handleClose }) => {
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
                                    <Form.Control type="text" placeholder="Lorem ipsum" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Photo URL</Form.Label>
                                    <Form.Control type="url" placeholder="https://www.img.com" />
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer className="border-top-0 pt-0">
                                <Button variant="link" onClick={handleClose}>Cancel</Button>
                                <Button className="btn-green" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </Fragment>
    );
};

export default AddPhoto;