import { createContext, useState, useContext } from "react";
import { SelectionContext } from "./SelectionContext";
import { endpoint } from "../data/endpoint";

export const GetBooksCommentContext = createContext();

export const GetBooksCommentProvider = ({ children }) => {
    
    const { selected } = useContext(SelectionContext)

    const [bookComments, setBookComments] = useState([]);
    const [ isLoading , setIsLoading ] = useState(false)

    const getComment = async () => {
        try {
            setIsLoading(true)
            const data = await fetch( endpoint[0].Url + selected.id,
                {
                    headers: {
                        "Authorization": endpoint[0].Token
                    }
                })
            const response = await data.json()
            setIsLoading(false)
            setBookComments(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <GetBooksCommentContext.Provider value={{ bookComments, getComment, isLoading }}>
            {children}
        </GetBooksCommentContext.Provider>
    )
}