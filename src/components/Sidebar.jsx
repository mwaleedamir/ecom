import React from "react";
import Closeup from "../utils/Closeup";

const Sidebar = () => {
   const lists = [
    { id: 1, name: "price" },
    { id: 2, name: "brand" },
    { id: 3, name: "price" }
  ];
  return (
    <div className="flex">
       
      <aside className="min-h-screen min-w-64 px-2 py-10">
        {lists.map(list => <Closeup key={list.id} name={list.name} />)}
      </aside>
    </div>
    
  );
};

export default Sidebar;
