import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
