import React from "react";

const MainWrapper = ({ children }) => {
    return (
      <div id="main-wrapper" className=" bg-black main-wrapper min-h-screen flex flex-col">
        {children}
      </div>
    );
  };
  
  export default MainWrapper;
  