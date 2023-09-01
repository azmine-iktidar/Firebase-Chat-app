import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
      <div className="sidebartext">
        <strong>Note:</strong>
        <ol>
          <li>
            The Seach works when you know the username only, which has to match
            exactly to the case. Example: type{" "}
            <span style={{ color: "Pink", fontWeight: 700 }}>"Azmine"</span>{" "}
            Exactly
          </li>
          <li>Video Call or group Call doesn not work, just for show</li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
