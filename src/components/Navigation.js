import React, { useState} from 'react';
import Logo from './images/logo.PNG';
import {Link} from "react-scroll";
import { FaBars, FaTimes} from 'react-icons/fa';

export const Navigation = () => {
    const [navigation, setNavigation] = useState(false);

    const handleClick = () => {
        setNavigation(!navigation);
    };

    return(
        <div className = "fixed w-full h-[80] flex justify-between items-center px-4 bg-[#1e1b4b] text-[#c7d2fe]">
            <div>
                <img src={Logo} alt="" style={{width:"90px"}}/>
            </div>
            <div>
                <ul className="hidden md:flex space-x-20">
                    <li>
                        <Link activeClass='active' to="about" smooth={true} duration={500} className='text-xl'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active' to="portfolio" smooth={true} duration={500} className='text-xl'>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active' to="contact" smooth={true} duration={500} className='text-xl'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active' to="resume" smooth={true} duration={500} className='text-xl'>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!navigation ? <FaBars /> : <FaTimes />}
            </div>
            <ul className= {
                !navigation 
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#0c131d] flex flex-col justify-center items-center"
            }
            >
                <li className="py-6 text text-4xl">
                    <Link
                    onClick={handleClick}
                    activeClass='active'
                    to="about"
                    smooth={true}
                    duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text text-4xl">
                    {" "}
                    <Link 
                    onClick={handleClick}
                    activeClass="active"
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="py-6 text text-4xl">
                    {" "}
                    <Link
                    onClick={handleClick}
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    duration={500}
                    >
                        Contact
                    </Link>
                </li>
                <li className="py-6 text text-4xl">
                    {" "}
                    <Link
                    onClick={handleClick}
                    activeClass="active"
                    to="resume"
                    smooth={true}
                    duration={500}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
};

