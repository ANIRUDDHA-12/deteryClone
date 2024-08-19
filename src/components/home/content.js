import React from 'react';
import style from "./content.module.css"


function Content({name,isStudent}) {
  return (
    <div className={style.content}>
      <div className={style.write}>
      {!isStudent?
      <p className={style.top}>App Developer</p>:
      <p className={style.top}>Student</p>}
      <h1 className={style.title}>{name}</h1>
      <p className={style.para}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
      tempor incididunt ut dolor the sit amet consectetur adipisicing
      elit sed do consectetur labore et dolo...
      </p>
      <button className={style.click}>View more</button>
      </div>
    </div>
  );
}

export default Content;
// write a java program to take details of book(id,title,author)shoulf be private take these inputs from user using cla(command line argument)

