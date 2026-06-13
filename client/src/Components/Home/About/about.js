import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faBullseye, faCircleCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


export function About() {
    return (
        <>
            <div className="about">
                <nav className="navbar navbar-expand-lg p-3 sticky-top" id="navbar">
                    <div className="container">
                        <a className="navbar-brand navbarbrand" href="#">Learner<div></div></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active  navlink1" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  navlink1" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  navlink1" href="/courses">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  navlink1" href="/instructor">Instructors</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle  navlink1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/enrolldetails">EnrollDetails</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div>
                                <Link to={'/enroll'}><button className="btn btn-lg rounded-pill enroll1">Enroll Now</button></Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* abouthom */}

                <div>
                    <nav className="navbar navbar-expand-lg p-3" id="abouthom">
                        <div className="container">
                            <a className="navbar-brand navbarbrand1" href="#">About</a>
                            <div className="collapse navbar-collapse navbarlin" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <a className="nav-link navlink2" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li>
                                        <p className="nav-link">/</p>
                                    </li>
                                    <li>
                                        <a className="nav-link">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                    {/*abhome  */}

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12 abhom1 mb-4">
                                <div>
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/education-square-2.webp" className="img-fluid rounded-4" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 abhom2">
                                <p className="adus">ABOUT US</p>
                                <p className="empower">Empowering Future Leaders Through Quality Education</p>
                                <p className="empower1 mt-4">"Empowering Future Leaders Through Quality Education" emphasizes the transformative power of learning. By fostering critical thinking, innovation, and confidence, quality education equips students to lead with purpose. It lays the foundation for building responsible, skilled, and visionary leaders of tomorrow.</p>
                                <div className="row mt-5 text-center">
                                    <div>
                                        <p className="yearofno">15</p>
                                        <p className="yearofexper">Years of Experience</p>
                                    </div>
                                    <div>
                                        <p className="yearofno">200+</p>
                                        <p className="yearofexper">Expert Instructors</p>
                                    </div>
                                    <div>
                                        <p className="yearofno">50k+</p>
                                        <p className="yearofexper">Students Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ourtasks */}

                    <div className=" container ourtasks text-center">
                        <div className="row text-center">
                            <div className="col-lg-4 col-md-4 col-12 ourmission mb-4">
                                <p className="icontask"><FontAwesomeIcon icon={faBullseye} size="2xl" /></p>
                                <p className="fs-4 fw-bold">Our Mission</p>
                                <p className="fs-6 text-secondary">Our mission is to provide inclusive, high-quality education that empowers individuals to achieve their full potential.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 ourmission mb-4">
                                <p className="icontask"><FontAwesomeIcon icon={faEye} size="2xl" /></p>
                                <p className="fs-4 fw-bold">Our Vision</p>
                                <p className="fs-6 text-secondary">Our vision is to shape a future where every learner becomes a confident, compassionate, and capable leader.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 ourmission mb-4">
                                <p className="icontask"><FontAwesomeIcon icon={faAward} size="2xl" /></p>
                                <p className="fs-4 fw-bold">Our Values</p>
                                <p className="fs-6 text-secondary">Our values center on integrity, innovation, inclusivity, collaboration, and a commitment to excellence in everything we do.</p>
                            </div>
                        </div>
                    </div>

                    {/*  */}

                    <div className="container abbottom">
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-12 col-12 mb-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12 mb-4">
                                        <div>
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/education-1.webp" className="img-fluid rounded-4" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 mb-4">
                                        <div>
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/students-3.webp" className="img-fluid rounded-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/campus-8.webp" className="img-fluid rounded-4" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 mt-5">
                                <div>
                                    <p className="adus">WHY CHOOSE US</p>
                                    <p className="empower">Transforming Education for a Better Tomorrow</p>
                                    <p className="empower1">Transforming Education for a Better Tomorrow means embracing innovation, inclusivity, and lifelong learning. It aims to equip students with the skills and mindset needed to thrive in a rapidly changing world.</p>
                                    <div className="mt-4">
                                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-2 iconcirche" size="lg" />Flexible learning options and schedules</p>
                                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-2 iconcirche" size="lg" />Industry-experienced instructors</p>
                                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-2 iconcirche" size="lg" />Interactive and engaging course content</p>
                                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-2 iconcirche" size="lg" />Career guidance and placement support</p>
                                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-2 iconcirche" size="lg" />State-of-the-art online learning platform</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-lg rounded-pill mt-4 arrowrig">Discover More<FontAwesomeIcon icon={faArrowRight} size="xs" className="ms-2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}

                <div className="foot">
                    <footer className="container">
                        <div>
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