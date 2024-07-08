import React, { useState, useContext, createContext } from "react";
import useDebounce from "../Hooks/useDebounce";
import useFetch from "../Hooks/useFetch";

const BooksContext = createContext();
export const useBooksData = () => useContext(BooksContext)

const BooksDataProvider = ({ children }) => {
    const [query, setQuery] = useState("math");
    const { data=[], loading=false, error=false } = useFetch(useDebounce(query, 500));

    return(
        <BooksContext.Provider
            value={{
                setQuery,
                query,
                data,
                loading,
                error
            }}
        >
            {children}
        </BooksContext.Provider> 
    )      
}

export default BooksDataProvider;