import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSearchInput } from '../redux/countries/countriesSlice';

const SeachComponent = () => {
    const {searchInput} = useAppSelector((state)=> state.countriesR);
    const dispatch = useAppDispatch();

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
dispatch(setSearchInput(e.target.value.toLowerCase()));
    }
  return (
    <div>
        <h1>SeachComponent</h1>
        <input type="text" placeholder='search country' 
        value={searchInput} onChange={handleInput}/>
    </div>
  )
}

export default SeachComponent