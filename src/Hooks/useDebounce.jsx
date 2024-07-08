import { useState, useEffect } from "react";

const useDebounce = (string="", delay=500) => {
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedSearch(string)
        }, delay);

        return () => clearTimeout(timer);
    }, [string])

    return debouncedSearch
}

export default useDebounce;