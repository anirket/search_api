import React from 'react'
import { IMAGE_URL } from '../Utils/API'
import ShowMoreText from "react-show-more-text"
import { motion } from "framer-motion"

const MovieComponent = ({ movies, itemindex }) => {


    const itemVariants = {
        initial: { x: "-100vw", opacity: 0.5 },
        animate: { x: 0, opacity: 1 },
    };

    return (
        <>
            <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: itemindex * 0.07,type:"spring" }}
            
                className='flex md:flex-row flex-col  border-2 md:border-0 m-2 rounded-xl items-center p-4'>
                <img onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `/Images/moviecase_logo.png`;
                }}
                    className='rounded-lg' src={`${IMAGE_URL}${movies.poster_path}`} alt="" />
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
                    <div className='rating'>
                        <div>
                            <span className='font-semibold'>Rating :</span> {movies.vote_average}
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
            </motion.div>
            <div className='divider bg-gray-200 w-full hidden md:block'>
            </div>
        </>
    )
}

export default MovieComponent