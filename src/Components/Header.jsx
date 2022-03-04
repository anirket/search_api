import React from 'react'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="header_logo flex items-center p-4 md:mx-44 cursor-pointer">
                <img className='w-8' src="/Images/moviecase_logo.png" alt="Logo" />
                <h2 className='pl-2 font-semibold text-red-500 '>Moviecase</h2>
            </div>
            <div className='divider bg-gray-200 w-full'>
            </div>
        </div>
    )
}

export default Header