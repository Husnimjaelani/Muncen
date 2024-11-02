import React from "react";
import SectionDivider from "../SectionDevinder";

const MainWrapper = ({ children }) => {
    return (
      <div id="main-wrapper" className=" bg-black main-wrapper min-h-screen flex flex-col">
        {children}
        <SectionDivider/>
      </div>
    );
  };
  
  export default MainWrapper;
  