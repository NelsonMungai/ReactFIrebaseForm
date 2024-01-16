import React from 'react'
import "../App.css";
import {db} from "../firebase";
import { useState } from 'react';

const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    db.collection("contacts").add({
      name:name,
      email:email,
      message:message
    }).then(()=>{
      alert("Message has been submitted");
    })
    .catch(error=>{
      alert(error.message);
    });
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label>Name</label>
        <input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>

        <label>Email</label>
        <input placeholder='Email' value={name} onChange={(e)=>setEmail(e.target.value)}/>

        <label>Message</label>
        <textarea placeholder='message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

        <button  type="submit">Submit</button>
    </form>
  )
}

export default Contact;
