import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function myFunction(){
    var checkBox = document.getElementById("myCheck");
   
    if (checkBox.checked === true){
      document.body.style.backgroundColor = "rgb(64, 64, 64)";
    document.body.style.color="white";
  
    } else {
     
      document.body.style.color="black";
      document.body.style.backgroundColor = "#abf8efe8";
      
    }
  }

  function Day(){
      return( <label className='switch'>
      <input type="checkbox" id="myCheck" onClick={myFunction} />
      <span className="slider round"></span>
    </label>);
  }


  export default Day;