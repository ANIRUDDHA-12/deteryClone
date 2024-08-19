import React from "react";
import style from "./experience.module.css"

function Experience() {
  const VirtualDesign=[
    {
      title:"Visual designer",
      experience:"2017-2018 | FULL TIME | INHOUSE",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title:"Visual designer",
      experience:"2017-2018 | FULL TIME | INHOUSE",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title:"Visual designer",
      experience:"2017-2018 | FULL TIME | INHOUSE",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title:"Visual designer",
      experience:"2017-2018 | FULL TIME | INHOUSE",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }

  ]
  return (
    <div className={style.card}>
      <p className={style.me}>Experience</p>
      <hr className={style.horizontal}></hr>
      <div className={style.some}>
      { VirtualDesign.map((some)=> <ServiceCard title={some.title} experience={some.experience} description={some.description} />)}
      </div>
     
    </div>
  );
}

export default Experience;

function ServiceCard({title,experience,description}){
  return <div className={style.content}>
     <p className={style.title}>{title}</p>
     <p className={style.experience}>{experience}</p>
     <hr className={style.slant}></hr>
      <p className={style.any}>{description}</p>
  </div>
  
}