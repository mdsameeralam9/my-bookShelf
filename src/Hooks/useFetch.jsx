import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { isArrayWithLength } from "../util";

const useFetch = (query="") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API = `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`;
  const controller = new AbortController();

  //fetchApiData
  const fetchApiData = useCallback(async() => {
    setLoading(true)
    try {
      const resJson = await fetch(API, {signal: controller.signal});
      const response = await resJson.json();
      const { docs=[] } = response;
      if(isArrayWithLength(docs)){
        setData(docs)
      }
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [query])

  useEffect(() => {
    if(query !== ""){
      fetchApiData()
    }

    if(query === "") {
      setData([])
    }
    return () => controller.abort();
  }, [query, fetchApiData])

  return { data, error, loading}
}

export default useFetch;