import React, { useEffect, useContext } from 'react'

import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/esm/Button'

import CommentList from './CommentList'
import AddComment from './AddComment'

import { SelectionContext } from '../context/SelectionContext'
import { GetBooksCommentContext } from '../context/GetBooksCommentContext'

const CommentArea = ({ asin }) => {

    const { selected, setSelected } = useContext(SelectionContext)

    const { bookComments, getComment, isLoading } = useContext(GetBooksCommentContext)

    useEffect(() => {
        getComment()
    }, [selected])

    const closeComments =() => {
        setSelected({id:null,bookTitle:null})
    }

    return (
        <div className='sticky-top pt-4'>
            <Modal.Dialog 
                centered size='lg' 
                className='border p-2 bg-white rounded-2'
            >
                <div className='my-1'>
                    <div className={`text-end ${selected.id !== null && !isLoading ? "" : "d-none"}`}>
                        <Button 
                            onClick={closeComments} 
                            className=' py-0 px-2 btn-danger'
                        >
                            X
                        </Button>
                    </div>
                    <Modal.Title>Comments:</Modal.Title>
                    <h4
                        className={`m-4 text-center ${selected.id !== null ? "" : "d-none"}`}
                    >
                        "{selected.bookTitle}"
                    </h4>
                </div>
                <h3
                    className={`my-4 text-center  ${selected.id === null ? "" : "d-none"}`}
                >Seleziona un libro
                </h3>
                <div className='text-center'>
                    {isLoading ? <Spinner className="m-4" animation="border" /> : null}
                </div>
                <div className={`${selected.id !== null && !isLoading ? "" : "d-none"}`}>
                    <Modal.Body
                        className={`overflow-y-scroll my-2`}
                        style={{ maxHeight: "350px" }}>
                        <ul className='list-group'>
                            {bookComments.map((comment) => {
                                return (
                                    <CommentList
                                        key={comment._id}
                                        id={comment._id}
                                        author={comment.author}
                                        comment={comment.comment}
                                        rate={comment.rate}
                                    />
                                )
                            })}
                        </ul>
                    </Modal.Body>
                    <AddComment
                        reviews={getComment}
                    />
                </div>
            </Modal.Dialog>
        </div>
    )
}

export default CommentArea
