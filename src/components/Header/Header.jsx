import React, { useState } from 'react'
import { FaShopify } from 'react-icons/fa6'
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import './Header.css'
import SolutionsMenu from './SolutionsMenu';
import { CiMenuBurger } from 'react-icons/ci';

function Header() {
    const [solutionDropDown, setSolutionDropDown] = useState(false)
    const [resourcesDropDown, setResourcesDropDown] = useState(false)
    const [whatsNewDropDown, setWhatsNewDropDown] = useState(false)

    const toggleSolutionsDropdown = () => {
        setSolutionDropDown(!solutionDropDown);
    };

    const toggleResourcesDropdown = () => {
        setResourcesDropDown(!resourcesDropDown);
    };

    const toggleWhatsNewDropdown = () => {
        setWhatsNewDropDown(!whatsNewDropDown);
    };

  return (
    <>
        <div className='header'>
            <div className='header-logo'>
                <FaShopify style={{fontSize: "2.5rem", color: "green"}}/>
                <h1>Nemefy</h1>
            </div>
            <div className='header-links'>
                <span>
                    Solutions
                    {solutionDropDown ? <IoMdArrowDropup onClick={toggleSolutionsDropdown} /> : <IoMdArrowDropdown onClick={toggleSolutionsDropdown} />}
                </span>
                <span>
                    Pricing
                </span>
                <span>
                    Resources
                    {resourcesDropDown ? <IoMdArrowDropup onClick={toggleResourcesDropdown} /> : <IoMdArrowDropdown onClick={toggleResourcesDropdown} />}
                </span>
                <span>
                    What's new
                    {whatsNewDropDown ? <IoMdArrowDropup onClick={toggleWhatsNewDropdown} /> : <IoMdArrowDropdown onClick={toggleWhatsNewDropdown} />}    
                </span>
            </div>
            <div className='start'>
                <span>Log in</span>
                <span>Start free trial</span>
                <span className='mobile-menu'><CiMenuBurger style={{fontSize: "24px"}}/></span>
            </div>
        </div>
        {solutionDropDown && <SolutionsMenu />}
    </>
  )
}

export default Header