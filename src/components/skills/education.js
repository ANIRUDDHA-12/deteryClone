import React from "react";
import style from "./education.module.css"

function Education(){
    return(
        <div className={style.skill}>
            <p className={style.title}>
                Education & skill
            </p>
            <hr className={style.horizontal}></hr>
            <div className={style.show}>
                <div>
                    <div className={style.left}>
                        <p className={style.year}>2010-2012</p>
                        <p className={style.mid}>Front-end Engineer</p>
                        <p className={style.last}> International Design Institute</p>
                        <hr className={style.slant}></hr>

                        <p className={style.year}>2013-2014</p>
                        <p className={style.mid}>Graphic Designer</p>
                        <p className={style.last}> International Design Institute</p>
                        <hr className={style.slant}></hr>


                        <p className={style.year}>2015-2016</p>
                        <p className={style.mid}>Webx Designer</p>
                        <p className={style.last}> International Design Institute</p>
                    </div>
                </div>
                <div className={style.right}>
         <section className={style.sort}>

         <span className={style.number}>90%</span>
         <section style={{ width:"100%"}}>
         <span style={{textAlign:"left"}}>Html</span>
         <div className={style.progress}></div>
         </section>
         </section>
         

         <section className={style.sort}>

         <span className={style.number}>80%</span>
         <section style={{ width:"100%"}}>
         <span style={{textAlign:"left"}}>CSS</span>
         <div className={style.progress1}></div>
         </section>
         </section>


         <section className={style.sort}>
        <span className={style.number}>70%</span>
        <section style={{ width:"100%"}}>
        <span style={{textAlign:"left"}}>ReactJs</span>
        <div className={style.progress2}></div>
        </section>
        </section>


        <section className={style.sort}>

        <span className={style.number}>50%</span>
        <section style={{ width:"100%"}}>
        <span style={{textAlign:"left"}}>API</span>
        <div className={style.progress3}></div>
        </section>
        </section>


            <section className={style.sort}>

            <span className={style.number}>80%</span>
            <section style={{ width:"100%"}}>
            <span style={{textAlign:"left"}}>Html</span>
            <div className={style.progress4}></div>
            </section>
            </section>

        
                </div>
            </div>
        </div>
    )
}
export default Education;