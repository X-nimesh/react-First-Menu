import React, { useState } from 'react'
import { HiMenu} from "react-icons/hi";
import logo from '../nsLogo.png'
import settings  from '../settings.svg'


const MiniNavBar = () => {
  
  const [click,setClick] = useState(false);
  const [clickSmall,setClickSmall] = useState(true);
  const [Small,setSmall] = useState(false);
  const [hidenItem,setHidden] = useState(true);
  function clickChange(){
      if(window.screen.width < 600){
        setSmall(true);
        setClickSmall(!clickSmall);
        }
      setClick(!click);
    console.log(click);
  }
  return (
    <div className='mini-Menu'>
      <div className="top-bar-mobile">
         <HiMenu className='icon'/>
      </div>
        <div className="mini_Menu-full" 
        style={{display: hidenItem?'flex':'none'}}>
       
                <ul className="top-elements" 
                    style={{}}>
                  <li>
                    
                    <img src={logo} alt=""  width="70px" className='menu-Text'/>
                  </li>
                  <li>
                      
                      <a href="#"className='menu-Text'>task1</a>
                  </li>
                  <li>
                      <a href="#"className='menu-Text'>Task2</a>
                  </li>
                  <li>
                      <a href="#"className='menu-Text'>Task 3</a>
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

    </div>

  )
}

export default MiniNavBar