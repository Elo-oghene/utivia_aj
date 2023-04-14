import React, { useState } from 'react'
import GlobalButton from './GlobalButton'
import classess from "./Header.module.css"
import {BiMenuAltRight} from "react-icons/bi"
import {MdClear} from "react-icons/md"

const Header = () => {

    const [toogle, setToogle] = React.useState(true)

    const handleToggle = () => {
        setToogle(!toogle)
    }
  return (
      <nav className={classess.navBar}>
          <div className={classess.hold_navigation}>
              
              
              <div className={classess.logo}>
                   <div className={classess.firsticonHolder}>
                  {
                      toogle ? (
                          <div
                              onClick={handleToggle}
                          >
                              <BiMenuAltRight style={{
                      fontSize: "40px",
                                  color: "blue",
                      cursor:"pointer"
                  }}/>
                          </div>) : (
                              <div onClick={handleToggle}>
                                  <MdClear
                                      
                                      style={{
                      fontSize: "40px",
                                          color: "blue",
                      cursor:"pointer"
                  }}
                                  
                                  />
                          </div>)
                  }
             
             
              </div>
                  
                  <span>Utiva</span>
              </div>
                
           

              <div className={classess.navlinks}>
                  <div className={classess.nav_link}>Schools</div>
                  <div className={classess.nav_link}>Enterprises</div>
                  <div className={classess.nav_link}>company</div>
              </div>

              <div className={classess.mybtn}>
                  <GlobalButton  >sign up</GlobalButton>
                  <GlobalButton outline="true"  varient="primary">Log in</GlobalButton>
              </div>
              
              <div className={classess.iconHolder}>
                  {
                      toogle ? (
                          <div
                              onClick={handleToggle}
                          >
                              <BiMenuAltRight style={{
                      fontSize: "40px",
                                  color: "blue",
                      cursor:"pointer"
                  }}/>
                          </div>) : (
                              <div onClick={handleToggle}>
                                  <MdClear
                                      
                                      style={{
                      fontSize: "40px",
                                          color: "blue",
                      cursor:"pointer"
                  }}
                                  
                                  />
                          </div>)
                  }
             
              </div>

          </div>
      </nav>
  )
}

export default Header