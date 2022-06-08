import React from 'react';
import Day from "./nav.js";

import 'bootstrap/dist/css/bootstrap.css';
import  "./nav.css";
   

function Nav(){
return (<div>
<nav className="navbar ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <span className='head'> TicTacToe </span>  
    </a>
     <Day />
  </div>
</nav></div>);
};
export  default  Nav ;