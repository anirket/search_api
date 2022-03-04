import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import axios from 'axios';
import { nowplaying } from '../Redux/actions';
import { useDispatch } from 'react-redux';

const Search = () => {


  const [switch_task, setswitch_task] = useState(1);
  const [inputsearch, setinputsearch] = useState("");
  const [showinfomessage, setshowinfomessage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nowplaying());
  }, [])



  const getpopular = (switchid) => {
    switchchangeUI(switchid)
  }

  const getrated = (switchid) => {
    switchchangeUI(switchid)

  }

  const getothers = (switchid) => {
    switchchangeUI(switchid)
  }

  const switchchangeUI = (switchid) => {
    setswitch_task(Number(switchid))
  }

  const changeserachinput = (value) => {
    setinputsearch(value)
    if (value.length <= 3) {
      setshowinfomessage(true);
      return;
    }
    setshowinfomessage(false);


    //apicall
  }



  return (
    <div className='Searchoptions flex md:flex-row flex-col mt-5  md:justify-between md:mx-44 md:mt-16'>
      <div className="switchers  flex justify-center md:block">
        <button id="1" onClick={(event) => getpopular(event.target.id)} className={`${(switch_task === 1) ? "border-b-2 border-red-500 text-red-500" : "border-none"} p-3 mr-3`}>Now Playing</button>
        <button id="2" onClick={(event) => getrated(event.target.id)} className={`${(switch_task === 2) ? "border-b-2 border-red-500 text-red-500" : "border-none"} p-3 mr-3`}>Popular</button>
        <button id="3" onClick={(event) => getothers(event.target.id)} className={`${(switch_task === 3) ? "border-b-2 border-red-500 text-red-500" : "border-none"} p-3 mr-3`}>Rated</button>
      </div>
      <div className='Searchinput  flex items-center justify-center mt-7 border-gray-600 p-3 mx-5 md:mt-0  md:p-0 relative'>
        <div className='flex items-center'>
          <FiSearch className='w-10 text-gray-600 font-semibold' /> <input onBlur={() => setshowinfomessage(false)} value={inputsearch} onChange={(event) => changeserachinput(event.target.value)} className='p-1 outline-none w-72' maxLength={20} type="text" placeholder={`Try "Singham" or "Shutter Island"`} />
        </div>

        <div className={`${showinfomessage ? "block" : "hidden"}  Infomessage absolute top-14 w-80 bg-white p-3 rounded-lg`}>
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