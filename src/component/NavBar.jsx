import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import NavButton from "./NavButton";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };

    const smoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="fixed w-full h-[80px] top-0 left-0 flex justify-between items-center bg-white lg:px-52 px-5  text-[#54BD95] text-md font-semibold z-10 shadow-lg  ">
            <div className="flex gap-3">
                <img src={logo} alt="" />
            </div>

            {/*Menu*/}
            <div className="flex gap-5 ">

                <div className="hidden gap-5 md:flex transition-transform duration-700 ease-in-out ">
                    <a href="#Home" onClick={(e) => smoothScroll(e, '#Home')} className="hover:border-b  cursor-pointer hover:bg-[#54BD95] py-2 px-7 hover:text-white transition transform duration-500 ease-in border-white rounded-full">Home</a>
                    <a href="#About" onClick={(e) => smoothScroll(e, '#About')} className="hover:border-b  cursor-pointer hover:bg-[#54BD95] py-2 px-7 hover:text-white transition transform duration-500 ease-in border-white rounded-full">About</a>
                    <a href="#Services" onClick={(e) => smoothScroll(e, '#Services')} className="hover:border-b  cursor-pointer hover:bg-[#54BD95] py-2 px-7 hover:text-white transition transform duration-500 ease-in border-white rounded-full">Features </a>
                    <a href="#Team" onClick={(e) => smoothScroll(e, '#Team')} className="hover:border-b  cursor-pointer hover:bg-[#54BD95] py-2 px-7 hover:text-white transition transform duration-500 ease-in border-white rounded-full">Blog</a>
                    <a href="#Contact" onClick={(e) => smoothScroll(e, '#Contact')} className="hover:border-b  cursor-pointer hover:bg-[#54BD95] py-2 px-7 hover:text-white transition transform duration-500 ease-in border-white rounded-full">Contact</a>

                    <NavButton />
                </div>

            </div>

            {/*Hamburger*/}
            <div onClick={handleClick} className="z-10 md:hidden">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/*Mobile Menu*/}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-[100%] h-screen bg-[#1B2732] flex flex-col justify-center items-center text-lg"
                }
            >
                <li className="py-6 ">Home</li>
                <li className="py-6 ">About</li>
                <li className="py-6 ">Features</li>
                <li className="py-6 ">Blog</li>
                <li className="py-6 ">Contact</li>

                <NavButton />
            </ul>

            {/*Social Icons*/}
        </div>
    );
};
export default Navbar;
