import React from 'react'
import classes from "./button.module.css"

const GlobalButton = (props) => {
  return (
    <button className={`${classes.globalbtn} 
                        ${classes[props.varient]} 
                        ${classes[props.outline]}`}
                        >{props.children}</button>
  )
}

export default GlobalButton