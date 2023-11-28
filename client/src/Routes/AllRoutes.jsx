import { Route, Routes } from "react-router-dom";
import NavbarBeforeLogin from "../Components/NavbarBeforeLogin";
import Signup from "../Components/Signup";
import Login from "../Components/Login";




export default function AllRoutes(){


    return (
        <Routes>
            <Route path="/" element={<NavbarBeforeLogin><Signup/></NavbarBeforeLogin>}></Route> 
             <Route path="/login" element={<NavbarBeforeLogin><Login/></NavbarBeforeLogin>} ></Route>
           
        </Routes>
    )
}