import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Welcome = () => {

    const myThemeContext = useContext(ThemeContext)
    const { dark , toggleTheme } = myThemeContext
    
    return (
        <div className={`${dark ? "bg-dark text-white" : null}`} >
            <div className="container">
                <h1 className="display-4">BookShoop</h1>
                <p className="lead pb-3">È la libreria online dove acquistare libri, eBook, cd, dvd, videogiochi e idee regalo. Letture e intrattenimento per ogni occasione!
                </p>
            </div>
        </div>
    )
}

export default Welcome