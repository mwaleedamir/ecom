import React from 'react'
import Navbar from '../components/Navbar'
import NavLinks from '../components/NavLinks'
import Sidebar from '../components/Sidebar'
import Cards2 from '../components/Cards2'
import Filters from '../components/Filters'

const FilterLanding = () => {
  return (
    <div>
        <Navbar/>
        <NavLinks/>
        <div className='flex'>
            <Sidebar/>
            <div className=''>
            <Filters/>
            <Cards2/>
            </div>
        </div>
      
    </div>
  )
}

export default FilterLanding
