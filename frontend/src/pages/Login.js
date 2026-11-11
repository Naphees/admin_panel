import React from 'react'
import { useState } from 'react'
export default function Login() {
    // form field state
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    // message state
    const [message, setMessage] = useState({
        email_message:"",
        password_message:"",
        server_message:"",
    })

    // form data handler
    const  handler = (e) =>{

    }

    // submit form
    const  formSubmit = async (e) =>{

    }

  return (
    <div>Login</div>
  )
}
