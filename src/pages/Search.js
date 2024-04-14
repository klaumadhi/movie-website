import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"


export const Search = ({apiPath}) => {
const [searchParams] = useSearchParams()
const queryTerm = searchParams.get("q")


  const {data: movies} = useFetch(apiPath, queryTerm)

  useTitle(`Search results for "${queryTerm}"`)
  

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-grey-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'`: `Results for '${queryTerm}'`}</p>
      </section>
    <section className=" py-7">
      <div className="flex justify-start flex-wrap" > 
      {movies.map((movie)=> (
        //Pass information of movie object into Card.js
          <Card key={movie.id} movie={movie}/>
      ))}
       </div>

    </section>
   
    </main>
  )
}
