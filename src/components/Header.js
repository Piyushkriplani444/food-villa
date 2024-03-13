import { useState } from "react";
import foodvilla from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = ()=> (
    <a href="/">
    <img 
        className="h-28  p-2"
        alt="logo"
        src={foodvilla} />
    </a>
);

const Header = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const isOnline = useOnline();   
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-purple-900 md:bg-yellow-50">
            <Title />
            <div className="nav-items">
                <ul className="flex  py-10">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li  className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li  className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li  className="px-2">
                        <Link to="/instamart"> Instamart</Link>
                    </li>
                    <li  className="px-2">Cart</li>
                </ul>
            </div> 
            <h4  className="px-2">{isOnline ? "✅":"🔴" }</h4>
            {isLoggedIn ?(
                 <button className="px-6" onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ): (
                 <button className="px-6"  onClick={()=> setIsLoggedIn(true)}>Login</button>
            )}
           
        </div>
    );
}

export default Header;