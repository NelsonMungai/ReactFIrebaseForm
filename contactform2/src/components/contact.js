import React,{ useState } from "react"
import "./contact.css"
const Contact = () => {
    const [userData,setUserData]=useState({
        Name:"",Email:"",Message:""
    })
    let name,value
    const data=(e)=>
    {
        name=e.target.name
        value=e.target.value
        setUserData({...userData,[name]:value})
    }
    const send=async(e)=>{
        const {Name,Email,Message}=userData
        e.preventDefault();
        const option={
            method:"POST",
            header:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                Name,Email,Message
            })
        }
        const res= await fetch('https://contactform2-2039c-default-rtdb.firebaseio.com/Messages.json',option)
        console.log(res)
        if(res.ok){
            alert("Messages sent successfully")
            setUserData({Name:"",Email:"",Message:""})
        }
    }


  return (
    <>
    <div className="container">
        <div className='contact-box'>
            <form method="POST">
                <input type="text" name="Name" value={userData.Name} placeholder="Enter your name" autoComplete="off" onChange={data}/>
                <input type="email" name="Email" value={userData.Email} placeholder="Enter your Email" autoComplete="off" onChange={data}/>
                <textarea name="Message" value={userData.Message}  placeholder="Enter your Message" autoComplete="off" onChange={data}></textarea>

                <button type="submit" onClick={send}>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact