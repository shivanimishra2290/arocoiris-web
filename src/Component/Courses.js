import React from 'react'
import '../css/style.css';
import course from '../img/course-1.jpg'
import course2 from '../img/course-2.jpg'
import course3 from '../img/course-3.jpg'



export default function Courses() {
  return (
    <>
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>
          <div id="carouselExampleControls" class=" carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner-courses" id="popular-courses">
              <div class="carousel-item active">


                <div class="row my-3">

                  <div class="col-lg-4 my-3">
                    <div class="card" style={{ width: "8rem;" }}>
                      <img src={course} class="img-fluid" alt="..." />
                      <div class="course-content">

                        <div class="d-flex justify-content-between align-items-center">
                          <h4>Web Design</h4>
                          <p class="price">$250</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Search Engine Optimization</h5>
                        <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      </div>
                    </div>
                    </div>
                     <div class="col-lg-4 my-3">
                    <div class="card" style={{ width: "8rem;" }}>
                      <img src={course2} class="img-fluid" alt="..." />
                      <div class="course-content">

                        <div class="d-flex justify-content-between align-items-center">
                          <h4>Marketing</h4>
                          <p class="price">$250</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Website Design</h5>
                        <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      </div>
                    </div>


                  </div>



                  <div class="col-lg-4 my-3">
                    <div class="card" style={{ width: "8rem;" }}>
                      <img src={course3} class="img-fluid" alt="..." />
                      <div class="course-content">

                        <div class="d-flex justify-content-between align-items-center">
                          <h4>Content</h4>
                          <p class="price">$250</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Copywriting</h5>
                        <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row my-3">

                  <div class="col-lg-4 my-3">
                    <div class="card" style={{ width: "8rem;" }}>
                      <img src={course} class="img-fluid" alt="..." />
                      <div class="course-content">

                        <div class="d-flex justify-content-between align-items-center">
                          <h4>Web Design</h4>
                          <p class="price">$250</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Website Design</h5>
                        <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      </div>
                    </div>


                  </div>


                  <div class="col-lg-4 my-3">
                    <div class="card" style={{ width: "8rem;" }}>
                      <img src={course2} class="img-fluid" alt="..." />
                      <div class="course-content">

                        <div class="d-flex justify-content-between align-items-center">
                          <h4>Marketing</h4>
                          <p class="price">$250</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Search Engine Optimization</h5>
                        <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      </div>
                    </div>
                  </div>



                  <div class="col-lg-4 my-3">
                    <div class="card" style={{ width: "8rem;" }}>
                      <img src={course3} class="img-fluid" alt="..." />
                      <div class="course-content">

                        <div class="d-flex justify-content-between align-items-center">
                          <h4>Content</h4>
                          <p class="price">$250</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Copywriting</h5>
                        <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      </div>
                    </div>


                  </div>

                </div>


              </div>

            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>


    </>
  )
}
