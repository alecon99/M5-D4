import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import historyBooks from '../data/history.json'
import CardBook from './CardBook'
import SearchBar from './SearchBar'

const LatestRelease = () => {
    const [books, setBooks] = useState([])

    const booksSetting = () => {
        setBooks(historyBooks)
    }

    useEffect(() => {
        booksSetting()
    }, [])

    return (
        <>
            <SearchBar books={books} setBooks={setBooks} historyBooks={historyBooks} />
            <Container>
                <Row>
                    {books && books.map((book) => {
                        return (
                            <Col key={book.asin} sm={6} md={4} lg={3} xl={2}>
                                <CardBook
                                    asin={book.asin}
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default LatestRelease
