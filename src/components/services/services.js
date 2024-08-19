import React from "react";
import style from "./services.module.css"

function Services() {
  const ServiceData=[{
    src:"download.png",
    title:"Web Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    src:"download.png",
    title:"Web design",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    src:"download.png",
    title:"Graphic Design",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    src:"download.png",
    title:"Mobile Apps",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    src:"download.png",
    title:"SEO Marekting",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    src:"download.png",
    title:"Web Banner",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  }

];
  return (
    <div className={style.card}>
       <p className={style.me}>My Services</p>
       <hr className={style.horizontal}></hr>
    <div className={style.service}>
      { ServiceData.map((service)=> <ServiceCard src={service.src} title={service.title} description={service.description} />)}

    </div>
    </div>
  );
}

export default Services;

function ServiceCard({ src,title,description}){
  return <div className={style.content}>
     <img src={src}></img>
     <p className={style.title}>{title}</p>
      <p className={style.any}>{description}</p>
  </div>
  
}


