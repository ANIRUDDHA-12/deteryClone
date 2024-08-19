import React from "react";
import style from"./about.module.css"

function About({name,designation,description}) {
  return (
    <div className={style.card}>
        <div className={style.image}>
        <img src="cardimage.jpeg"></img>
        <p className={style.big}>{name}</p>
        <p className={style.small}>UI/UX Designer</p>
        </div>
        <div className={style.info}>
        <p className={style.us}>About us.</p>
        <p className={style.some}>It is a long established fact that a reader will be distracted by the eadable content of a page when looking at its layout. The point of using Lorem Ipsum th that it has a ore-or-less normal distributi.</p>

        <p className={style.some}>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>

        <p className={style.personal}>Personal Info</p>
        <div className={style.personalInfo}>
          <div className={style.name}>
            <p>Name : Detery Plakson</p>
            <p>Age : 24 Years</p>
            <p> Nationality : USA</p>
            <p> Freelance : Available</p>
          </div>
          <div className={style.name}>
            <p>Address : California, USA</p>
            <p> Phone : 258-963-1472</p>
            <p>Skype : Deteryplakson22</p>
            <p>E-mail : Plakson@gmail.com</p>
          </div>
        </div>

        <button className={style.download} onMouseDown={handleClick}>Download CV</button>
        </div>
      
       
    </div>
  );
}

export default About;

function handleClick(){
  window.open("/");
}