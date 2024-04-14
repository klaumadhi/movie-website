import { useState , useEffect} from "react"

export const useFetch = (apiPath, queryTerm="") => {

    const [data, setData]= useState([])
    //To create a api key create .env file and add .env to gitignore
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url)
          const json =  await response.json()
          setData(json.results)
        }
        fetchMovies()
      
      }, [url])
  return {data}
}
