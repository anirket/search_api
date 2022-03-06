import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { nowplayingmovies, switchtab, getpopularmovies, getratedmovies, getsearchedquery } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { IoCloseSharp } from "react-icons/io5"

const Search = () => {

  const [switch_task, setswitch_task] = useState(1);
  const [inputsearch, setinputsearch] = useState("");
  const [showinfomessage, setshowinfomessage] = useState(false);

  const inputsearchref = useRef(null);

  const dispatch = useDispatch();
  const { moviecase } = useSelector(state => state);

  useEffect(() => {

    dispatch(switchtab(1))
    if (moviecase.now_playing.length > 0) {
      return;
    }

    dispatch(nowplayingmovies());

  }, [dispatch, moviecase.now_playing.length])


  useEffect(() => {

    if (inputsearch === "") {
      return;
    }

    if (inputsearch.length >= 3) {
      dispatch(getsearchedquery(inputsearch))
    }

  }, [inputsearch, dispatch])


  const getpopular = (switchid) => {
    switchchangeUI(switchid)
    if (moviecase.popular_movies.length > 0) {
      return;
    }
    dispatch(getpopularmovies())

  }

  const getrated = (switchid) => {
    switchchangeUI(switchid)

    if (moviecase.rated_movies.length > 0) {
      return;
    }
    dispatch(getratedmovies())

  }

  const getnowplaying = (switchid) => {
    switchchangeUI(switchid)
  }

  const switchchangeUI = (switchid) => {

    if (switchid !== 4) {
      clearinput();
      setinputsearch("");
    }

    setswitch_task(Number(switchid))
    dispatch(switchtab(switchid))
  }

  const clearinput = () => {
    inputsearchref.current.value = "";
  }

  const deb = useCallback(
    _debounce((value) => setinputsearch(value), 1000)
    , [])

  const changeserachinput = (value) => {

    deb(value);


    if (value.length < 3) {
      setshowinfomessage(true);
      return;
    }

    if (value.length === 3) {
      switchchangeUI(4)
    }

    setshowinfomessage(false);

  }



  return (
    <div className='Searchoptions flex md:flex-row flex-col mt-5  md:justify-between md:mx-44 md:mt-16'>
      <div className="switchers  flex justify-center md:block">
        <button id="1" onClick={(event) => getnowplaying(event.target.id)} className={`${(switch_task === 1) ? "border-b-2 border-red-500 text-red-500" : "border-none"} p-3 mr-3`}>Now Playing</button>
        <button id="2" onClick={(event) => getpopular(event.target.id)} className={`${(switch_task === 2) ? "border-b-2 border-red-500 text-red-500" : "border-none"} p-3 mr-3`}>Popular</button>
        <button id="3" onClick={(event) => getrated(event.target.id)} className={`${(switch_task === 3) ? "border-b-2 border-red-500 text-red-500" : "border-none"} p-3 mr-3`}>Rated</button>
      </div>
      <div className='Searchinput  flex items-center justify-center mt-7 border-gray-600 p-3 mx-5 md:mt-0  md:p-0 relative'>
        <div className='flex items-center'>
          <FiSearch className='w-10 text-gray-600 font-semibold' /> <input ref={inputsearchref} onBlur={() => setshowinfomessage(false)} onChange={(event) => changeserachinput(event.target.value)} className='p-1 outline-none w-72' maxLength={20} type="text" placeholder={`Try "Singham" or "Shutter Island"`} /> <span ><IoCloseSharp onClick={clearinput} className='text-xl cursor-pointer' /></span>
        </div>

        <div className={`${showinfomessage ? "block" : "hidden"}   Infomessage absolute top-14 w-80 bg-white p-3 rounded-lg z-50 mt-2 md:mt-0`}>
          <h2 className='font-semibold text-md  text-gray-800'>
            Type atleast 3 characters
          </h2>
          <h6 className="text-sm text-gray-500 pt-1">
            to start searching
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Search