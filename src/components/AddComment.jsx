import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { SelectionContext } from '../context/SelectionContext';

const AddComment = ({ reviews }) => {

    const mySelection = useContext(SelectionContext)
    const { selected } = mySelection

    const [review, setReview] = useState("")
    const [rate, setRate] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const postComment = async () => {
        try {
            const payload = {
                "comment": review,
                "rate": rate,
                "elementId": selected.id,
            };
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE4M2I1MTEyYjUwYzAwMTQ5ZTYzOGEiLCJpYXQiOjE2ODg3NDY4MzMsImV4cCI6MTY4OTk1NjQzM30.1888VQqvbcwhGFYqpRzI_IUmHhX6K_OJsBg8IPQkn04"
                    }
                })
            setReview("")
            setRate("")
        } catch (err) {
            console.log(err)
        }
    }

    const sendReview = (e) => {
        e.preventDefault();

        handleClose()
        if (review && rate) {
            postComment()
            reviews()
        } else {
            alert("riempire tutti i campi")
        }
    }

    return (
        <>
            <Button
                onClick={handleShow}
                className={`btn btn-success my-2 ${selected.id !== "vuoto" ? "" : "d-none"}`}
            >
                <FontAwesomeIcon icon={faPlus} /> add review
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group
                            className="mb-3"
                            onChange={(e) => setReview(e.target.value)}

                        >
                            <Form.Label>Review</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            onChange={(e) => setRate(e.target.value)}
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control type="number" min="1" max="5" placeholder='1 / 5' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={sendReview}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddComment