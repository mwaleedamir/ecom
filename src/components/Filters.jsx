import React, { useState } from 'react'
import { CgCross } from 'react-icons/cg'

const Filters = () => {
    const [toggle, setToggle] = useState(false)

    const funcToggle = () =>{
        setToggle(!toggle)
    }

    const lists = [
        { id: 1, name: "PUMA" },
        { id: 2, name: "Adidas" },
        { id: 3, name: "Shoes" }
      ];
  return (
 
       <div className="flex  items-center gap-4 mx-5 my-10 ">
            {lists.map((list)=>(
                <button onClick={()=>funcToggle()} className="border-0 px-5 py-1 rounded-md bg-gray-100">
                    {toggle && <CgCross/> 
                    }

                    {list.name}
                    </button>
            )) }
        </div>
  
  )
}

export default Filters
