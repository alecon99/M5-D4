import React, { useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Selection } from './Main';
import { ThemeContext } from '../context/ThemeContext';

const CardBook = ({ img, title, price, asin }) => {

    const myThemeContext = useContext(ThemeContext)
    const { dark , toggleTheme } = myThemeContext
    
    const mySelection = useContext(Selection)
    const { selected, setSelected} = mySelection
    const [ animation , setAnimation ] = useState(null)

    const toggleSelected = () => {
        if(selected.id === asin){
            setSelected({id:"vuoto",bookTitle:"vuoto"})
            setAnimation("")
        } else {
            setSelected({id:`${asin}`,bookTitle:`${title}`})
            setAnimation("yes")
        }
    }

    return (
        <>
            <Card
                onClick={toggleSelected}
                className={`${animation ? 'opacity-75 border border-danger shadow' : null}`}
                style={{ marginBottom: '10px' }}
            >
                <Card.Img
                    variant="top"
                    src={img}
                    style={{
                        height: "400px",
                        objectFit: "cover"
                    }} />
                <Card.Body
                    className={`${dark ? 'bg-secondary text-white' : null}`}
                > 
                    <Card.Title
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}
                    >{title}</Card.Title>
                    <Card.Text>€ {price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardBook