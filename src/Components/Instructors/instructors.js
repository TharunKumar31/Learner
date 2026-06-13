import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faBehance, faDribbble, faFacebook, faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export function Instructors() {
    return (
        <>
            <div className="instructor">
                <nav class="navbar navbar-expand-lg p-3 sticky-top" id="navbar">
                    <div class="container">
                        <a class="navbar-brand navbarbrand" href="#">Learner<div></div></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active  navlink1" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  navlink1" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  navlink1" href="/courses">Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  navlink1" href="">Instructors</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle  navlink1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Pages
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/enrolldetails">EnrollDetails</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="">
                                <Link to={'/enroll'}><button className="btn btn-lg rounded-pill enroll1" href="/enroll">Enroll Now</button></Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* instructorhom */}

                <div>
                    <nav class="navbar navbar-expand-lg p-3" id="courseshom">
                        <div class="container">
                            <a class="navbar-brand navbarbrand1" href="#">Instructors<div></div></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse navbarlin2" id="navbarSupportedContent">
                                <ul class="navbar-nav mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li>
                                        <p className="nav-link">/</p>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="">Instructors</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* instrhome */}

                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-2.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Sarah Johnson</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faLinkedin} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-7.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Michael Chen</p>
                                        <p className="webdeve">Data Science</p>
                                        <p className="masterweb">Data Science involves analyzing and interpreting complex data to uncover patterns, insights, and decision-making.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">3.5k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.9</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faLinkedin} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-4.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Amanda Rodriguez</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faDribbble} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faBehance} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-9.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Sarah Johnson</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faInstagram} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faFacebook} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  mt-4">
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-6.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Sarah Johnson</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faLinkedin} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faYoutube} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-1.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Sarah Johnson</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-8.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Sarah Johnson</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faLinkedin} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faFacebookF} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-4">
                                <div class="card sarapro rounded-4">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-10.webp" class="card-img-top rounded-top-4" />
                                    <div class="card-body">
                                        <p className="sarah">Sarah Johnson</p>
                                        <p className="webdeve">Web Development</p>
                                        <p className="masterweb">Master the art of building dynamic, responsive websites and web applications using modern technologies.</p>
                                        <div className="d-flex text-center ratstu">
                                            <div className="sturat">
                                                <p className="stuss">2.1k</p>
                                                <p className="ratss">Students</p>
                                            </div>
                                            <div className="sarahrat">
                                                <p className="stuss">4.8</p>
                                                <p className="ratss">Rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <button className="vieprosar">View Profile</button>
                                            </div>
                                            <div className="d-flex sarbrand">
                                                <button className="saricon1 btn btn-sm"><FontAwesomeIcon icon={faLinkedin} /></button>
                                                <button className="ms-2 saricon2"><FontAwesomeIcon icon={faCloud} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}

                <div className="foot">
                    <footer className="container">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12 mb-4">
                                    <p className="navbarbrand">Learner</p>
                                    <p className="leaknow">A learner is someone who actively seeks knowledge, skills, or understanding through study or experience.They embrace curiosity and growth, continuously evolving through education and practice.</p>
                                    <div className="d-flex">
                                        <p className="iconfoot"><FontAwesomeIcon icon={faXTwitter} className="ms-3" /></p>
                                        <p className="iconfoot ms-3"><FontAwesomeIcon icon={faFacebook} className="ms-3" /></p>
                                        <p className="iconfoot ms-3"><FontAwesomeIcon icon={faInstagram} className="ms-3" /></p>
                                        <p className="iconfoot ms-3"><FontAwesomeIcon icon={faLinkedin} className="ms-3" /></p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-12 mb-4">
                                    <p className="uselink">Useful Links</p>
                                    <div className="linkuse">
                                        <p>Home</p>
                                        <p>About us</p>
                                        <p>Services</p>
                                        <p>Terms of service</p>
                                        <p>Privacy policy</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-12 mb-4">
                                    <p className="uselink">Our Services</p>
                                    <div className="linkuse">
                                        <p>Web Design</p>
                                        <p>Web Development</p>
                                        <p>Product Management</p>
                                        <p>Marketing</p>
                                        <p>Graphic Design</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-12 mb-4">
                                    <p className="uselink">Contact Us</p>
                                    <div className="linkuse">
                                        <p>A108 Adam Street<br />New York, NY 535022<br />United States</p>
                                        <p>Phone: +1 5589 55488 55</p>
                                        <p>Email: info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="infoot text-center mt-5">
                                <p className="mt-3">© Copyright Learner All Rights Reserved<br />Designed by STK</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}