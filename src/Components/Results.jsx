import React from 'react'
import { useSelector } from 'react-redux'
import MovieComponent from './MovieComponent';





const Results = () => {

  const { moviecase } = useSelector(state => state);

  console.log(moviecase.active)
  switch (Number(moviecase.active)) {
    case 1:
      return (

        <div className='p-4 md:mx-60'>
          {
            moviecase.now_playing.map((movies) => (
              < MovieComponent key={movies.id} movies={movies} />
            ))
          }
        </div>
      )
    case 2:
      return (

        <div className='p-4 md:mx-60'>
          {
            moviecase.popular_movies.map((movies) => (
              < MovieComponent key={movies.id} movies={movies} />
            ))
          }
        </div>
      )
    case 3:
      console.log("")
      return (

        <div className='p-4 md:mx-60'>
          {
            moviecase.rated_movies.map((movies) => (
              < MovieComponent key={movies.id} movies={movies} />
            ))
          }
        </div>
      )
    case 4:
      return (
        <div className='p-4 md:mx-60'>
          {
            moviecase.searched_query.map((movies) => (
              < MovieComponent key={movies.id} movies={movies} />
            ))
          }
        </div>
      )
    default:
      return (
        <>Hie</>
      )
  }
}



export default Results