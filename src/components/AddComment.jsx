import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse';

const AddComment = ({ bookId, reviews }) => {

    const [open, setOpen] = useState(false)
    const [review, setReview] = useState("")
    const [rate, setRate] = useState("")

    const postComment = async () => {
        try {
            const payload = {
                "comment": review,
                "rate": rate,
                "elementId": bookId,
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
            setReview = "";
            setRate = "";

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
                className='btn-warning mb-2'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Inserisci nuova recenzione
            </Button>
            <Collapse in={open}>
            <Form className='border rounded-3 p-4 bg-light'>
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
                <Button variant="success" type="submit" onClick={sendReview}>
                    Send
                </Button>
            </Form>
            </Collapse>

           
        </>
    )
}

export default AddComment