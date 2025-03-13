import React from 'react'
import Navbar from '../components/Navbar'
import NavLinks from '../components/NavLinks'
import Sidebar from '../components/Sidebar'
import Cards1 from '../components/Cards1'
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
            <Cards1/>
            </div>
        </div>
      
    </div>
  )
}

export default FilterLanding
