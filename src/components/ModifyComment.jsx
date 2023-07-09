import React, { useState, useContext, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

import { SelectionContext } from '../context/SelectionContext';
import { GetBooksCommentContext } from '../context/GetBooksCommentContext'

import { endpoint } from '../data/endpoint';

const ModifyComment = ({commentId, comment, rate}) => {

    const { getComment } = useContext(GetBooksCommentContext)

    const { selected} = useContext(SelectionContext)

    const [formReview, setFormReview] = useState("")
    const [formRate, setFormRate] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => {
        setFormReview(comment)
        setFormRate(rate)
    }, [])

    const postComment = async () => {
        try {
            const payload = {
                "comment": formReview,
                "rate": formRate,
                "elementId": selected.id,
            };
            const data = await fetch( endpoint[0].Url +commentId ,
                {
                    method: "PUT",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": endpoint[0].Token
                    }
                })
            handleClose()
            getComment()
        } catch (err) {
            console.log(err)
        }
    }

    const sendReview = (e) => {
        e.preventDefault();

        if (formReview && formRate) {
            postComment()
        } else {
            alert("riempire tutti i campi")
        }
    }

    return (
        <>
            <Button 
                variant="btn btn-dark m-1" 
                onClick={handleShow}
                className={`${selected.id !== "vuoto" ? "" : "d-none"}`}
                >
                <FontAwesomeIcon icon={faPencil} />
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modify comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group
                            className="mb-3"
                            onChange={(e) => setFormReview(e.target.value)}                            
                        >
                            <Form.Label>Review</Form.Label>
                            <Form.Control type="text" value={formReview}/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            onChange={(e) => setFormRate(e.target.value)}
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control type="number" min="1" max="5" placeholder='1 / 5'value={formRate} />
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

export default ModifyComment