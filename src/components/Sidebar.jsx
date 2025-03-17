import React from "react";
import Closeup from "../utils/Closeup";
import { v4 as uuidv4 } from "uuid";

const Sidebar = () => {
  const lists = [{ name: "price" }, { name: "brand" }];
  return (
    <div className="flex">
      <aside className="min-h-screen min-w-64 px-2 py-10">
        {lists.map(list =>
          <div key={uuidv4()}>
            <Closeup name={list.name} />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
