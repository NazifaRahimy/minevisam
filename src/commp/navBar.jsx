import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";        // آیکون همبرگر
import { IoClose, IoScale } from "react-icons/io5";      // آیکون بستن (ضربدر)
import { MdHome } from "react-icons/md";        // آیکون خانه
import { useState } from "react";
const NavBar = () => {
       const [isMenuOpen, setIsMenuOpen] = useState(false);
    return ( 
        <div className="w-full p-[50px] ">
            <div dir="rtl" className="w-full relative h-auto justify-between rounded-bl-full rounded-tl-full rounded-br-full px-6 py-2 flex shadow-[0px_0px_5px_rgba(0,0,0,0.2)] ">
               <div className="w-1/5">
                    <img className="w-[100px]" src="https://minevisam.ir/wp-content/uploads/2018/03/logo.jpg" alt="" />
                </div>
                <button onClick={()=> setIsMenuOpen(!isMenuOpen)}   className={` md:hidden  z-30 transition-all duration-300 ${isMenuOpen ? "fixed top-4 left-5 text-3xl font-bold" :"text-xl"}  `}>    {isMenuOpen ? <IoClose /> : <FaBars />}</button>
                <ul   className={` fixed shadow-lg text-xl text-font-bold bg-white z-20 flex-col top-5 ${isMenuOpen ? "left-0" : "-left-[250px]"}  w-[250px] gap-8 px-10 h-screen flex transition-all duration-300  md:gap-5 md:flex-row md:px-0   md:w-4/5 md:h-auto md:static   md:flex md:shadow-none md:text-[16px] lg:text-[20px] lg:gap-16 `}>
                    <Link to="/"> <li className="cursor-pointer mt-10 md:mt-0 transition-colors duration-[0.5s] hover:text-cyan-600">خانه</li> </Link>
                    <Link to="/technology" >       <li className="cursor-pointer transition-colors duration-[0.5s] hover:text-cyan-600">تکنولوژی</li></Link>
                    <Link to="/lifestyle">    <li className="cursor-pointer transition-colors duration-[0.5s] hover:text-cyan-600">سبک زندگی</li></Link>
                    <Link to="/entertainment" > <li className="cursor-pointer transition-colors duration-[0.5s] hover:text-cyan-600">سرگرمی</li></Link>
                    <Link to="/tourism">        <li className="cursor-pointer transition-colors duration-[0.5s] hover:text-cyan-600">گردشگری</li></Link>
                    <Link to="/fashion">  <li className="cursor-pointer transition-colors duration-[0.5s] hover:text-cyan-600">مدو زیبایی</li></Link>
                </ul>   
            </div>
        </div>
     );
}
 
export default NavBar;