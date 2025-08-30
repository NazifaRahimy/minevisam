import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";        // آیکون همبرگر
import { IoClose, IoScale } from "react-icons/io5";      // آیکون بستن (ضربدر)
import { MdHome } from "react-icons/md";        // آیکون خانه
import { useState } from "react";
const NavBar = () => {
       const [isMenuOpen, setIsMenuOpen] = useState(false);
    return ( 
     <div >
            <div dir="rtl">
                <div className="w-1/5">
                    <img className="" src="https://minevisam.ir/wp-content/uploads/2018/03/logo.jpg" alt="logo" />
                </div>
                       <button onClick={()=> setIsMenuOpen(!isMenuOpen)}  >    {isMenuOpen ? <IoClose /> : <FaBars />}</button>
         <ul   >
         
             
               <Link to="/"> <li >خانه</li> </Link>
               <Link to="/technology" >       <li >تکنولوژی</li></Link>
               <Link to="/lifestyle">    <li>سبک زندگی</li></Link>
                <Link to="/entertainment" > <li >سرگرمی</li></Link>
               <Link to="/tourism">        <li >گردشگری</li></Link>
               <Link to="/fashion">  <li >مدو زیبایی</li></Link>
            </ul>   
    
         </div>
     </div>

     );
}
 
export default NavBar;