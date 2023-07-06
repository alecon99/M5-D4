import {useContext} from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Selection } from './Main'

const RemoveComment = () => {

    const mySelection = useContext(Selection)
    const { selected, setSelected} = mySelection

    const removeComment = async () => {
        try {
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ selected,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNjA0MmI5YzBmNzAwMTQ0ODRmOTMiLCJpYXQiOjE2ODc1NDMwNzcsImV4cCI6MTY4ODc1MjY3N30.Jbqyx6hbchpUvyPRVhEQFursS7ggsmCruzpy6iRJdyw"
                    }
                })
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <Button className='btn btn-danger' onClick={removeComment}><FontAwesomeIcon icon={faTrash} /></Button>
  )
}

export default RemoveComment