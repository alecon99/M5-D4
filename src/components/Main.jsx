import React from 'react'

import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'

import LatestRelease from './LatestRelease'
import CommentArea from './CommentArea'

const Main = () => {

    return (
        <Container>
            <Row>
                <Col sm={6} lg={8}>
                    <LatestRelease/>
                </Col>
                <Col sm={6} lg={4}>
                    <CommentArea />
                </Col>
            </Row>
        </Container>
    )
}

export default Main