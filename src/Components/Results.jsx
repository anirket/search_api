import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading';
import MovieComponent from './MovieComponent';



const SwitchTab = ({ moviecase }) => {

  const [loadmore, setloadmore] = useState(5)
  const [hideloadmore, sethideloadmore] = useState(false)


  useEffect(() => {
    setloadmore(5);
    sethideloadmore(false);
  }, [moviecase.active])

  const nextpage = (itemlength) => {

    setloadmore((prev) => {
      if ((prev + 5) >= itemlength) {
        sethideloadmore(true);
        return prev + 5;
      }
      return prev + 5;
    });
  }


  switch (Number(moviecase.active)) {
    case 1:
      return (

        <div className='p-4 md:mx-60'>
          {
            moviecase.now_playing
              .slice(0, loadmore)
              .map((movies, itemindex) => (
                < MovieComponent key={movies.id} movies={movies} itemindex={itemindex} />
              ))
          }

          <div className={`${hideloadmore ? "hidden" : "flex"} loadmore  justify-center pb-20 mt-5`}>
            <button onClick={() => nextpage(moviecase.now_playing.length)} className='bg-blue-500 text-white p-2 rounded-xl'>Load More</button>
          </div>
        </div>
      )
    case 2:
      return (
        <>
          <div className='p-4 md:mx-60'>
            {
              moviecase.popular_movies
                .slice(0, loadmore)
                .map((movies) => (
                  < MovieComponent key={movies.id} movies={movies} />
                ))
            }
          </div>
          <div className={`${hideloadmore ? "hidden" : "flex"} loadmore  justify-center pb-20 mt-5`}>
            <button onClick={() => nextpage(moviecase.now_playing.length)} className='bg-blue-500 text-white p-2 rounded-xl'>Load More</button>
          </div>
        </>
      )
    case 3:
      return (
        <>
          <div className='p-4 md:mx-60'>
            {
              moviecase.rated_movies
                .slice(0, loadmore)
                .map((movies) => (
                  < MovieComponent key={movies.id} movies={movies} />
                ))
            }
          </div>
          <div className={`${hideloadmore ? "hidden" : "flex"} loadmore  justify-center pb-20 mt-5`}>
            <button onClick={() => nextpage(moviecase.now_playing.length)} className='bg-blue-500 text-white p-2 rounded-xl'>Load More</button>
          </div>
        </>
      )
    case 4:
      return (
        <>
          {

            moviecase.nomoviesfound ?
              (<>
                <h2 className='flex justify-center text-center mt-10 font-bold tracking-wide'>No Movies Found</h2>
              </>) :
              (<>
                <div className='p-4 md:mx-60'>
                  {
                    moviecase.searched_query
                      .slice(0, loadmore)
                      .map((movies) => (
                        < MovieComponent key={movies.id} movies={movies} />
                      ))
                  }
                </div>
                <div className={`${(hideloadmore || moviecase.nomoviesfound || moviecase.searched_query.length <= 5) ? "hidden" : "flex"} loadmore  justify-center pb-20 mt-5`}>
                  <button onClick={() => nextpage(moviecase.now_playing.length)} className='bg-blue-500 text-white p-2 rounded-xl'>Load More</button>
                </div>
              </>)

          }

        </>
      )
    default:
      return (
        <></>
      )
  }
}


const Results = () => {

  const { moviecase } = useSelector(state => state);



  if (!moviecase.loading && moviecase.apierror) {
    return (
      <div className='flex justify-center mt-20 text-xl text-center'>
        Something went wrong! Please try again Later
      </div>
    )
  }

  if (moviecase.loading) {
    return (<Loading />)
  }
  else {
    return (
      <SwitchTab moviecase={moviecase} />
    )
  }

}



export default Results