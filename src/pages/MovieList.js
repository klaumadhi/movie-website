
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"



export const MovieList = ({apiPath, title}) => {

  // rename data which we got from useFetch.js to movies
  const {data: movies} = useFetch(apiPath, title)
  //Set title of page
  useTitle(title)  



  return (
    <main>
      <section className=" py-7">
        <div className="flex justify-start flex-wrap  other:justify-evenly " > 
        {movies.map((movie)=> (
          //Pass information of movie object into Card.js
            <Card key={movie.id} movie={movie}/>
        ))}
            
            
           

         </div>

      </section>
     
      </main>
  )
}
