import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const SearchBar = () => {
  return (
    <div className='w-full h-4/6 flex bg-transparent relative align-middle items-center'>
        <input type="text" placeholder='Search' className='w-full h-full outline-none p-5  bg-search-box-back text-search-input-col'/>
        <button title='Search' className='absolute right-5  w-5 h-5 rounded-full text-center   text-white hover:bg-slate-600'><SearchSharpIcon sx={{fontSize: 'medium'}}/></button>
    </div>
  )
}

export default SearchBar