import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  const [isRightClickDisabled, setIsRightClickDisabled] = useState(true);

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      if (isRightClickDisabled) {
        event.preventDefault();
      }
    });
    setIsRightClickDisabled(false);
  }, [isRightClickDisabled]);

  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
