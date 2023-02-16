import React from 'react'
import Footer from './Footer'
import Header from './Header'
import about from '../img/about.jpg'


export default function About() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>About Us</h2>
            <p style={{ fontSize: "17px" }}>Arocoiris Technology is US based Indian Ed – tech Company, Arocoiris offers highly and effective learning
              program for student to upgrade their skills, Arocoiris classNamees totally based on modern technology with
              modern teachers.</p>
          </div>
        </div>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                {/* <img src="assets/img/about.jpg" className="img-fluid" alt=""/> */}
                <img src={about} className="img-fluid" alt="" />

              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Arocoiris Technology Ed-tech company was formed in January 2023. </h3>
                <p className="fst-italic">
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
                <h5 style={{fontWeight:"bold"}}>Three important reasons to choose Arocoiris Technology</h5>
                <p>If you are asking yourself, why you chouse Arocoiris Technology? We have summed up the following
                  three reasons to remove the clouds of doubts from your mind:</p>
                <ul>
                  <li> Right from its inception, Arocoiris Technology has strived to create impact at mass-scale level.
                    With world-class technology, we want to ensure every student has access to the top
                    teachers in the country</li>
                  <li> Will be able to gauge every student’s depth of engagement amongst the hundreds in the
                    class this will enable our teachers to provide just the right nudge to them at the right time.</li>
                  <li></li>
                </ul>


              </div>
            </div>

          </div>
        </section>




      </main>
      <Footer />
    </>
  )
}

