import React, { useState } from "react";
import Input from "./Input";

function Login() {
  const [heading, setHeading] = useState("Hello");


function handleClick(){
  setHeading("Submitted");
}

    return (
      <div className="container">
        <h1></h1>
          <form className='form'>
            <Input type = "text" placeholder = "Your Username..." />
            <Input type = "password" placeholder = "Your Password..." />
            <button style = {{backgroundColor: "white"}} type = "submit" onClick={handleClick}>Login</button>
  
  
          </form>
      </div>
    );
  }

  export default Login;