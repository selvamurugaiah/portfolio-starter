import React from 'react'
import { BsMoon } from 'react-icons/bs';
import { HiOutlineSun } from 'react-icons/hi';
import './Toggle.css'

import { themeContext } from '../../context';
import {useContext} from 'react'

function Toggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = ()=>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className='toggle' onClick={handleClick}>
        <BsMoon/>
        <HiOutlineSun/>
        <div className='t-button'
        style={darkMode?{left:'2px'} : {right:'2px'}}>
                    
        </div>

    </div>
  )
}

export default Toggle