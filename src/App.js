import React from 'react';
import Login from './Login';
import Input from './Input';

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

 

function App() {
  return (
    <div className="container">{
      isLoggedIn? <h1>Good Work</h1> : <Login />               //Ternary Operator
      //currentTime > 12? <h1>Your working time is finished.</h1> : null
      //currentTime > 12 && <h1>Why are you working</h1>                    //condition && expression, if condition false expression got skipped
    }
    </div>
  );
}

export default App;
