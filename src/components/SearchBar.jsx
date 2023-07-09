import React, { useState, useContext } from 'react'

import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'

import historyBooks from '../data/history.json'

import { BooksContext } from '../context/BooksContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {

    const { books, setBooks} = useContext(BooksContext)

    const [searchTerm, setSearchterm] = useState("")

    const filterBooks = (e) => {
        e.preventDefault();

        const filterBooks = books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()));

        setBooks(filterBooks);
    }

    const searchResetBooks = (value) => {
        if (value === "") {
            setBooks(historyBooks)
        } else {
            setSearchterm(value)
        }
    }

    return (
            <Form className='d-flex'>
                <Form.Control
                    data-bs-theme="light"
                    type='text'
                    placeholder='search'
                    onChange={(e) => searchResetBooks(e.target.value)}
                />
                <Button
                    onClick={filterBooks}
                    type='submit'
                    className='btn-dark border'
                ><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} /></Button>

            </Form>
    )
}

export default SearchBar