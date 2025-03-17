import React from 'react'
import Navbar from '../components/Navbar'
import NavLinks from '../components/NavLinks'
import Sidebar from '../components/Sidebar'
import SecondPageCards from '../components/SecondPageCards'
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
            <SecondPageCards/>
            </div>
        </div>
      
    </div>
  )
}

export default FilterLanding
