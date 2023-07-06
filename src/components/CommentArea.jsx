import React, { useEffect, useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { Selection } from './Main'
import RemoveComment from './RemoveComment'

const CommentArea = ({ asin }) => {

    const mySelection = useContext(Selection)
    const { selected, setSelected} = mySelection

    const [bookComments, setBookComments] = useState([])

    const getComment = async () => {
        try {
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + selected.id,
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
    }, [selected])

    return (
        <div className='sticky-top pt-4'>
            <Modal.Dialog centered size='lg' className='border p-2 bg-light rounded-2'>
                <div className='my-1'>
                    <Modal.Title>Comments:</Modal.Title>
                    <h4
                        className={`m-4 text-center ${selected.id !== "vuoto" ? "" : "d-none"}`}
                    >
                        "{selected.bookTitle}"
                    </h4>
                </div>
                <h3
                    className={`my-4 text-center  ${selected.id === "vuoto" ? "" : "d-none"}`}
                >Seleziona un libro
                </h3>

                <Modal.Body
                    className={`overflow-y-scroll my-2  ${selected.id !== "vuoto" ? "" : "d-none"}`}
                    style={{ height: "400px" }}>
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
                </Modal.Body>
                {!selected ? null : <AddComment
                    bookId={asin}
                    reviews={getComment}
                />}
            </Modal.Dialog>
        </div>
    )
}

export default CommentArea
