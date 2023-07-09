import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Welcome = () => {

    const { dark } = useContext(ThemeContext)
    
    return (
        <div className={`${dark ? "bg-dark text-white" : "bg-light"}`} >
            <div className="container">
                <h1 className="display-4">
                    BookShoop
                </h1>
                <p className="lead pb-3">
                    It is the online library where you can buy books, eBooks, CDs, DVDs, video games and gift ideas. Readings and entertainment for every occasion!
                </p>
            </div>
        </div>
    )
}

export default Welcome