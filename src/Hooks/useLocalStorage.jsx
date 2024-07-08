import { useState } from 'react';
import { isArrayWithLength } from "../util";


const useLocalStorage = () => {
    let getLocalData = (key) =>  JSON.parse(localStorage.getItem(key)) || [];

    const setLocalData = (key,data) => {
        let isError = false
        let currentItemArray = JSON.parse(localStorage.getItem(key)) || [];

        if (isArrayWithLength(currentItemArray)) {
            let isExist = currentItemArray.some(item => item.key === data.key);
            if (!isExist) {
                currentItemArray.push(data);
            } else {
                isError = true;
            }
        } else {
            currentItemArray.push(data);
        }
        localStorage.setItem(key, JSON.stringify(currentItemArray));

        return isError;
    }

    return {getLocalData, setLocalData}
}

export default useLocalStorage;