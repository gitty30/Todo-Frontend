import {React,useState} from 'react';

const Navbar=()=>{
    return (
      <div className="Nav-box">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAF22K5FyA4x7M_T0tRr4NMxghkyuKerBMCA&usqp=CAU"
            alt="img"
          />
          <h2 className="nav-head">Todos </h2>
        </div>
        <div className="nav-side">
          <h4>About us</h4>
          <button>Signup</button>
          <button>Login</button>
        </div>
      </div>
    );
}
export default Navbar;