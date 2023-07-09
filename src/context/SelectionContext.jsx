import { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {

    const [selected, setSelected] = useState({ id:null , bookTitle:null})

    return (
        <SelectionContext.Provider value={{selected, setSelected}}>
            {children}
        </SelectionContext.Provider>
    )
}