import React from 'react';
import style from "./home.module.css"

// Todo: convert to list mapping by creating a object



function Home() {
  const listElements=["About us","Service","Experience","Portfolio","Blog","Contact"]
  return (
    <div className={`home_app ${style.home}`}>
        <img src='title.jpeg' />
   <ul>
   { listElements.map((navLink)=> <NavElements list={navLink} />)}
    
   </ul>
    </div>
  );
}

export default Home;

function NavElements({list}){
  return(
    <li>{list}</li>
   
  );
}