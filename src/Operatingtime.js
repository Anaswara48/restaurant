import React, { useState } from 'react'
import { Button, ListGroup, Modal } from 'react-bootstrap'

function Operatingtime({ workingTime }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="warning" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className='text-center'>  Operating Hours </h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday    {workingTime.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday   {workingTime.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday {workingTime.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday  {workingTime.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday    {workingTime.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday  {workingTime.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday    {workingTime.Sunday}</ListGroup.Item>

                    </ListGroup>

                </Modal.Body>

            </Modal>


        </div>
    )
}

export default Operatingtime