import React from "react";
import Input from "./Input";

function Login() {
    return (
      <div className="container">
          <form className='form'>
            <Input type = "text" placeholder = "Your Username..." />
            <Input type = "text" placeholder = "Your Password..." />
            <button type = "submit">Login</button>
  
  
          </form>
      </div>
    );
  }

  export default Login;