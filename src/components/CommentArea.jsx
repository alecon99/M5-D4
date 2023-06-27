import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CommentList from './CommentList'
import AddComment from './AddComment'

const CommentArea = ({ setSelected, asin }) => {
    const [bookComments, setBookComments] = useState([])

    const closeComment = () => setSelected(false)

    const getComment = async () => {
        try {
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNjA0MmI5YzBmNzAwMTQ0ODRmOTMiLCJpYXQiOjE2ODc1NDMwNzcsImV4cCI6MTY4ODc1MjY3N30.Jbqyx6hbchpUvyPRVhEQFursS7ggsmCruzpy6iRJdyw"
                    }
                })
            const response = await data.json()
            setBookComments(response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getComment()
    }, [asin])

    return (
        <div
            className="modal show"
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
            <Modal.Dialog centered size='lg'>
                <Modal.Header>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='list-group'>
                        {bookComments.map((comment) => {
                            return (
                                <CommentList
                                    key={comment._id}
                                    author={comment.author}
                                    comment={comment.comment}
                                    rate={comment.rate}
                                />
                            )
                        })}
                    </ul>
                    <AddComment 
                        bookId={asin}
                        reviews={getComment} 
                    />
                </Modal.Body>
                <Modal.Footer>
                        <Button
                            className='btn-dark'
                            onClick={closeComment}
                        >Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CommentArea
