import React from "react";
import Sidebar from "./SideBar.jsx"
import MainContainer from "./MainContailer.jsx"
import {Outlet} from "react-router-dom"
const Body = () =>{
  return(
  <div className= "flex">
      <Sidebar />
      <Outlet />

  </div>
    
  )

}
export default Body;
