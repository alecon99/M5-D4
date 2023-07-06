import React, { useState,useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Selection } from './Main';

const AddComment = ({ reviews }) => {

    const mySelection = useContext(Selection)
    const { selected, setSelected} = mySelection

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
                "elementId": selected,
            };
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNjA0MmI5YzBmNzAwMTQ0ODRmOTMiLCJpYXQiOjE2ODc1NDMwNzcsImV4cCI6MTY4ODc1MjY3N30.Jbqyx6hbchpUvyPRVhEQFursS7ggsmCruzpy6iRJdyw"
                    }
                })
        } catch (err) {
            console.log(err)
        }
    }

    const sendReview = (e) => {
        e.preventDefault();

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
                variant="btn btn-warning my-2" 
                onClick={handleShow}
                className={`${selected.id !== "vuoto" ? "" : "d-none"}`}
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
                            <Form.Control type="number" min="1" max="5" placeholder='1 - 5' />
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