import React from "react";
import Input from "./Input";

function Register() {
    return (
      <div className="container">
          <form className='form'>
            <Input type = "text" placeholder = "Your Username..." />
            <Input type = "password" placeholder = "Your Password..." />
            <Input type = "password" placeholder = "Confirm Password..." />
            <button type = "submit">Register</button>
  
  
          </form>
      </div>
    );
  }

  export default Register;