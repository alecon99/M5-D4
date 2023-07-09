import { useContext } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import fantasy from '../data/fantasy.json'
import hystory from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import { BooksContext } from '../context/BooksContext';


const BooksSelector = () => {

    const { setBooks } = useContext(BooksContext)

    const setFantasy = ()=>{
        setBooks(fantasy)
    }
    const setHistory = ()=>{
        setBooks(hystory)
    }
    const setHorror = ()=>{
        setBooks(horror)
    }
    const setRomance = ()=>{
        setBooks(romance)
    }
    const setScifi = ()=>{
        setBooks(scifi)
    }

  return (
    <NavDropdown title="Browse" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={setFantasy}>
              Fantasy
            </NavDropdown.Item>
            <NavDropdown.Item onClick={setHistory}>
              Hystory
            </NavDropdown.Item>
            <NavDropdown.Item onClick={setHorror}>
              Horror
            </NavDropdown.Item>
            <NavDropdown.Item onClick={setRomance}>
              Romance
            </NavDropdown.Item>
            <NavDropdown.Item onClick={setScifi}>
              Scifi
            </NavDropdown.Item>
          </NavDropdown>
  )
}

export default BooksSelector