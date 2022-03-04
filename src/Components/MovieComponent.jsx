import React from 'react'
import { IMAGE_URL } from '../Utils/API'
import ShowMoreText from "react-show-more-text"

const MovieComponent = ({ movies }) => {
    return (
        <>
            <div className='flex md:flex-row flex-col justify-center border-2 md:border-0 m-2 rounded-xl items-center p-4'>
                <img className='rounded-lg' src={`${IMAGE_URL}${movies.poster_path}`} alt="" />
                <div className='pl-5'>
                    <div className='title text-lg font-semibold tracking-wide'>
                        {
                            movies.original_title
                        }
                    </div>
                    <div className='release'>
                        <div>
                            <span className='font-semibold'>Release Date :</span> {movies.release_date}
                        </div>
                    </div>
                    <div className='text-sm'>
                        <div>
                            <span className='font-semibold'>About :</span>
                            <ShowMoreText
                                lines={2}
                                more="Show more"
                                less="Show less"
                                anchorClass="my-anchor-css-class font-semibold"
                                expanded={false}
                                truncatedEndingComponent={"... "}
                            >
                                {movies.overview}

                            </ShowMoreText>

                        </div>
                    </div>


                </div>
            </div>
            <div className='divider bg-gray-200 w-full hidden md:block'>
            </div>
        </>
    )
}

export default MovieComponent