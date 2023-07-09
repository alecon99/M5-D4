import { useContext } from 'react'

import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { GetBooksCommentContext } from '../context/GetBooksCommentContext'

import { endpoint } from '../data/endpoint'

const RemoveComment = ({commentId}) => {

    const { getComment } = useContext(GetBooksCommentContext)

    const removeComment = async () => {
        try {
            const data = await fetch( endpoint[0].Url +commentId ,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": endpoint[0].Token
                    }
                })
            getComment()
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <Button className='btn btn-dark m-1' onClick={removeComment}><FontAwesomeIcon icon={faTrash} /></Button>
  )
}

export default RemoveComment