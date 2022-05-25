import React, { useState } from 'react'
import logo from '../nsLogo.png'
import settings  from '../settings.svg'
import settingsWhite from '../settings-white.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
import { IconName,DiAndroid } from "react-icons/di";
import { HiMenu} from "react-icons/hi";
import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
  
  const [click,setClick] = useState(false);
  const [clickSmall,setClickSmall] = useState(true);
  const [Small,setSmall] = useState(false);
  function clickChange(){
      if(window.screen.width < 600){
        setSmall(true);
        setClickSmall(!clickSmall);
        }
      setClick(!click);
    console.log(click);
  }


  return (
    <div className='nav-bar'>
        <ul className="left-Nav" id='left-Nav'
        style={{display:clickSmall?'':'none'}}>
            <li>
                <HiMenu className='icon'/>
               <img src={logo} alt=""  width="70px" className='menu-Text'/>
            </li>
            <li>
                
                <AiOutlineHome className='icon'/>
                <Link to="/task1">Gandaki</Link>
                {/* <Link  to="task1" className='menu-Text'>task1</Link> */}
            </li>
            <li>
                <AiOutlineMail className='icon'/>
                <Link  to="task2"className='menu-Text'>bagmati</Link>
            </li>
            <li>
                <DiAndroid className='icon'/>
                <Link  to="task3"className='menu-Text'>narayani</Link>
            </li>
        </ul>
        <div className="settings-Main" 
        onClick={clickChange}>
            <div className="settings-Logo">

             <img src={settings} alt="" />
            </div>
            <div className="dropdown-content" style={{
                display: click?'block':'',
                marginTop: clickSmall?'':'-550px',
                boxShadow: clickSmall?'0':'',
                width:clickSmall?'':'25.5vw',
                backgroundColor:clickSmall?'':'white',
                boxShadow:clickSmall?'':'none'
              }}>
                <a href="#">Main</a>
                <a href="#">Profile</a>
                <a href="#">Settings</a>
            </div>
             {/* <settingsWhite/> */}
        </div>
    </div>
  )
}

export default NavBar