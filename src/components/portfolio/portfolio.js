import React from "react";
import style from "./portfolio.module.css";

function Portfolio(){
    return(
        <div className={style.portfolio}>
            <p className={style.title}>My Portfolio</p>
            <hr className={style.horizontal}></hr>
            <ul className={style.list}>
                <a href="#"><li>ALL</li></a>
                <a href="#"><li>BRANDING</li></a>
               <a href="#"><li>PHOTOGRAPHY</li></a>
               <a href="#"><li>FASHION</li></a>
               <a href="#"><li>PRODUCT</li></a>
            </ul>

            <div className={style.picture}>
            <div>
                <img src="https://deterylightmode.netlify.app/static/media/img1.74397b079201644bf6fb.png"></img>
                <img src="https://deterylightmode.netlify.app/static/media/img3.e1c0d1e5af2d69bf0679.png"></img>
            </div>

            <div>
                <img src="https://deterylightmode.netlify.app/static/media/img2.bed9ba2fc29c7837d161.png"></img>
                <img src="https://deterylightmode.netlify.app/static/media/img4.40c86346397357276a1e.png"></img>
            </div>

            <div>
                <img src="https://deterylightmode.netlify.app/static/media/img5.54532a52040d5b34dad8.png"></img>
                <img src="https://deterylightmode.netlify.app/static/media/img6.4f7987bf3dc792c12412.png"></img>
            </div>

        </div>
        </div>
    );
}

export default Portfolio;