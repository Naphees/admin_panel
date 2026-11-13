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
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div>
            <h1>Login Page</h1>
            <input type='email' name='email' value={formData.email} onChange={handler} />
            <input type='password' name='password' value={formData.password} onChange={handler} />
            <button onClick={formSubmit}>Login</button>
          </div>
      </div>
  )
}
