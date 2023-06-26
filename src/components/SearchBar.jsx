import React, { useEffect , useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'

const SearchBar = ({books,setBooks,historyBooks}) => {

const [ searchTerm , setSearchterm] = useState("")

const filterBooks = (e) =>{
    e.preventDefault();

    const filterBooks = books.filter((book)=>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    setBooks(filterBooks);   
}

const searchResetBooks = (value)=> {
    if(value === ""){
        setBooks(historyBooks)
    } else {
        setSearchterm(value)
    }
    }

  return (
    <Container>
        <Form className='d-flex mb-3'>
            <Form.Control
                type='text' 
                placeholder='search' 
                onChange={(e)=> searchResetBooks(e.target.value)}
            />
            <Button 
                onClick={filterBooks} 
                type='submit'
                className='ms-2 btn-dark'
            >Cerca</Button>

        </Form>
    </Container>
  )
}

export default SearchBar