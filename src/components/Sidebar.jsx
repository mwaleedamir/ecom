import React from "react";
import SidebarItems from "../utils/SidebarItems";
import { v4 as uuidv4 } from "uuid";

const Sidebar = () => {
  const lists = [{ name: "price" }, { name: "brand" },{name: "rating"}];
  return (
    <div className="flex">
      <aside className="min-h-screen min-w-64 px-2 py-10">
        {lists.map(list =>
          <div key={uuidv4()}>
            <SidebarItems name={list.name} />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
