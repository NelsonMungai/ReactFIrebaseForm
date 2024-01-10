import React from 'react'

const Contact = () => {
  return (
    <form className='form'>
        <h1>Contact Form</h1>
        <label>Name</label>
        <input placeholder='name'/>

        <label>Email</label>
        <input placeholder='Email'/>

        <label>Message</label>
        <textarea placeholder='message'></textarea>
        
    </form>
  )
}

export default Contact;
