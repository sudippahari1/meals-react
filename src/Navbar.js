import React from "react";

function Navbar (){
    return <div style={{backgroundColor: 'brown'}}>
        <h1 style={{color:'white'}}>React Meals</h1>
        <a style={{margin:'30px', color:'whitesmoke'}}>Home</a>
        <a style={{margin:'30px', color:'whitesmoke'}}>Order</a>
        <a style={{margin:'30px', color:'whitesmoke'}}>Contact Us</a>
    </div>
};

export default Navbar;