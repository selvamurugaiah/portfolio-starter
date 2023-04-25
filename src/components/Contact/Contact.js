
import './Contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { themeContext } from '../../context';
import {useContext} from 'react'

export function Contact() {
    const form = useRef();
    const [done,setDone] =useState(false)

    const theme = useContext(themeContext)
    const darkMode =theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eo8cphr', 'template_nzao1ti', form.current, 'N7VIc42INkA6PYGMr')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact-form' id='Contact'>
        <div className='c-left'>
            <div className='awesome'>
                <span className='h-1' style={{color:darkMode?'white':'white'}}>Get in touch</span>
                <span className='h-2'>Contact Me</span>
                <div className='blur s-blur'
                style={{background:"#ABF1FF94"}}>

                </div>
            </div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name'/>
                <input type='email' name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='message'/>
                <input type='submit' value="send" className='button'/>
                <span>{done&&"Thanks for contacting me!"}</span>
                <div className='blur s-blur'
                style={{background:"var(--purple)"}}>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact