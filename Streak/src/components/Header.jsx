import React, { useState } from 'react'
import "../style/Global.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import DropDown from './DropDown';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [showDropDown , setShowDropDown] = useState(false);
  return (
    <>
     <div className='headersMainContainer'>
        <div className='headerTitleContainor'>
            <IoMdArrowRoundBack size={20}/>
            <p onClick={()=>navigate("/")}>Analytics Dashboard</p>
        </div>

        <div className='headerUserContainer'>
            <IoMdMore onMouseEnter={()=>setShowDropDown(true)} size={30}/>
            <FaUserCircle size={20}/>
        </div> 
    </div>
    {showDropDown && <DropDown setShowDropDown={setShowDropDown} />}
    </>
  )
}

export default Header