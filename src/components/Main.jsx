import React, { createContext, useContext, useState } from 'react'
import LatestRelease from './LatestRelease'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import CommentArea from './CommentArea'

export const Selection = createContext()

const Main = () => {

    const [selected, setSelected] = useState({ id:"vuoto" , bookTitle:"vuoto" })

    return (
        <Selection.Provider value={{ selected, setSelected }}>
            <Container>
                <Row>
                    <Col sm={8}>
                        <LatestRelease/>
                    </Col>
                    <Col sm={4}>
                        <CommentArea />
                    </Col>


                </Row>
            </Container>
        </Selection.Provider>
    )
}

export default Main