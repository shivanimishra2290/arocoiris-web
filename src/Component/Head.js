//import { abort } from 'process';
import React from 'react';
import '../css/style.css';
import about from '../img/about.jpg'

export default function Head() {
  return (
    <>
    <section id="hero" class="d-flex justify-content-center align-items-center">
    <div class="container position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
      <h1>Learning Today,<br/>Leading Tomorrow</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="courses.html" class="btn-get-started">Get Started</a>
    </div>
  </section>
  <section id="about" class="about">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <img src={about} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Arocoiris Technology Ed-tech company was formed in January 2023. </h3>

            <p class="fst-italic">
            It’s a fast- growing
                  company in the serious for modern skill development. Our vision is not just sales but to
                  provide a complete solution for future in corporate sector. Helping you to make the
                  right choice to secure your careers and build your life in modern style.
            </p>
            <p className="fst-italic">To provide practically knowledge based on the student progress, personal learning
                  profiles are created which help analyze strengths and areas of improvement. Each
                  concept gets tagged at different levels of difficulty to create a smooth learning curve
                  which keeps students motivated through any new learning challenges. Whenever errors
                  are made, motivating remedial are generated to strengthen and improve the student’s
                  learning experience</p>
                <h5 style={{fontWeight:"bold"}}>Important reasons to choose Arocoiris Technology</h5>
                <p>If you are asking yourself, why you chouse Arocoiris Technology? We have summed up the following
                  three reasons to remove the clouds of doubts from your mind:</p>
                  <ul>
                  <li> Right from its inception, Arocoiris Technology has strived to create impact at mass-scale level.
                    With world-class technology, we want to ensure every student has access to the top
                    teachers in the country.</li>
                 
                </ul>
                

          </div>
        </div>

      </div>
    </section>
    </>
  )
}
