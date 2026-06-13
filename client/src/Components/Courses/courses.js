import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
export function Courses() {
    return (
        <>
            <div className="courses">
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
                                    <a className="nav-link  navlink1" href="">Courses</a>
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
                            <div className="">
                                <Link to={'/enroll'}><button className="btn btn-lg rounded-pill enroll1" href="/enroll">Enroll Now</button></Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* courseshom */}

                <div>
                    <nav className="navbar navbar-expand-lg p-3" id="courseshom">
                        <div className="container">
                            <a className="navbar-brand navbarbrand1" href="#">Courses<div></div></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navbarlin1" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li>
                                        <p className="nav-link">/</p>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Courses</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* cohome */}

                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-12 mb-4">
                                <div className="filter">
                                    <div className=" ms-4">
                                        <p className="mt-3 fs-5 fw-bold">Filter Courses</p>
                                        <div className="line line4"></div>
                                    </div>
                                    <div className="mt-3  ms-4">
                                        <lable className="catefil">Category</lable><br />
                                        <input type="checkbox" className="mt-3" /> <span className="catcheck">All Categories</span><br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Programming</span>  <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Design</span>  <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Business</span>  <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Marketing</span>
                                    </div>
                                    <div className="mt-3 ms-4">
                                        <lable className="catefil">Level</lable><br />
                                        <input type="checkbox" className="mt-3" /> <span className="catcheck">All Levels</span> <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Beginner</span><br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Intermediate</span><br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Advanced</span>
                                    </div>
                                    <div className="mt-3 ms-4">
                                        <lable className="catefil">Duration</lable><br />
                                        <input type="checkbox" className="mt-3" /> <span className="catcheck">Under 5 hours</span> <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">5-20 hours</span> <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">20+ hours</span>
                                    </div>
                                    <div className="mt-3 ms-4">
                                        <lable className="catefil">Price</lable><br />
                                        <input type="checkbox" className="mt-3" /> <span className="catcheck">Free</span> <br />
                                        <input type="checkbox" className="mt-2" /> <span className="catcheck">Paid</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-12 col-12">
                                <div className=" row">
                                    <div className="col-lg-7 col-md-12 col-12 mb-3">
                                        <form className="input-wrapper">
                                            <p className="ms-3 mt-2"><FontAwesomeIcon icon={faMagnifyingGlass} className="iconmagni" /></p>
                                            <input type="search" placeholder="Search course..." className="form-control" />
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-12">
                                        <select className="ms-5 form-control selectopt">
                                            <option>Sort by:Most Popular</option>
                                            <option>Newest First</option>
                                            <option>Price:Low to High</option>
                                            <option>Price:High to Low</option>
                                            <option>Duration:Short to Long</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="row mt-4">
                                    <div className="col-lg-6 col-md-6 col-12 mb-4">
                                        <div className="card rounded-4">
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/courses-3.webp" height={260} className="card-img-top rounded-top-4" />
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <p className="prointer">Programming</p>
                                                    <p className="ms-3 interpro">INTERMEDIATE</p>
                                                </div>
                                                <div>
                                                    <p className="advjava">Advanced JavaScript Development</p>
                                                    <p className="javaadv">Advanced JavaScript Development explores in-depth concepts and modern techniques for building efficient, scalable, and high-performance.</p>
                                                </div>
                                                <div className="d-flex mt-5">
                                                    <p className="javaadv"><FontAwesomeIcon icon={faClock} className="iconjava" /> 15 hours</p>
                                                    <p className="ms-5 javaadv"><FontAwesomeIcon icon={faUserGroup} className="iconjava" /> 1,245 students</p>
                                                </div>
                                                <div className="d-flex">
                                                    <p>
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="javaadv ms-2">4.8 (89 reviews)</p>
                                                </div>
                                                <div className="line line5"></div>
                                                <div className="d-flex mt-3">
                                                    <div>
                                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-m-3.webp" className="rounded-5" height={40} width={40} />
                                                    </div>
                                                    <p className="ms-3 mt-1 fw-bold">Dr. Marcus Thompson</p>
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-lg enroll3">Enroll Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mb-4">
                                        <div className="card rounded-4">
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/courses-7.webp" className="card-img-top rounded-top-4" height={260} />
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <p className="prointer">Design</p>
                                                    <p className="ms-3 interpro">Beginner</p>
                                                </div>
                                                <div>
                                                    <p className="advjava">UI/UX Design Fundamentals</p>
                                                    <p className="javaadv">UI/UX Design Fundamentals cover the core principles of creating intuitive, user-friendly, and visually engaging digital experiences.</p>
                                                </div>
                                                <div className="d-flex mt-5">
                                                    <p className="javaadv"><FontAwesomeIcon icon={faClock} className="iconjava" /> 8 hours</p>
                                                    <p className="ms-5 javaadv"><FontAwesomeIcon icon={faUserGroup} className="iconjava" /> 2,891 students</p>
                                                </div>
                                                <div className="d-flex">
                                                    <p>
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="javaadv ms-2">4.6 (156 reviews)</p>
                                                </div>
                                                <div className="line line5"></div>
                                                <div className="d-flex mt-3">
                                                    <div>
                                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-f-7.webp" className="rounded-5" height={40} width={40} />
                                                    </div>
                                                    <p className="ms-3 mt-1 fw-bold">Sarah Johnson</p>
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-lg enroll3">Enroll Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                                            <div className="card rounded-4">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/courses-12.webp" className="card-img-top rounded-top-4" height={260} />
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <p className="prointer">Business</p>
                                                        <p className="ms-3 interpro">Beginner</p>
                                                    </div>
                                                    <div>
                                                        <p className="advjava">Digital Marketing Strategies</p>
                                                        <p className="javaadv">Digital Marketing Strategies focus on leveraging online channels to effectively promote brands, engage audiences, and drive conversions.</p>
                                                    </div>
                                                    <div className="d-flex mt-5">
                                                        <p className="javaadv"><FontAwesomeIcon icon={faClock} className="iconjava" /> 22 hours</p>
                                                        <p className="ms-5 javaadv"><FontAwesomeIcon icon={faUserGroup} className="iconjava" /> 678 students</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <p>
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        </p>
                                                        <p className="javaadv ms-2">5.0 (42 reviews)</p>
                                                    </div>
                                                    <div className="line line5"></div>
                                                    <div className="d-flex mt-3">
                                                        <div>
                                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-m-8.webp" className="rounded-5" height={40} width={40} />
                                                        </div>
                                                        <p className="ms-3 mt-1 fw-bold">Dr. Marcus Thompson</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button className="btn btn-lg enroll3">Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                                            <div className="card rounded-4">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/courses-5.webp" className="card-img-top rounded-top-4" height={260} />
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <p className="prointer">Programming</p>
                                                        <p className="ms-3 interpro">Advanced</p>
                                                    </div>
                                                    <div>
                                                        <p className="advjava">Machine Learning with Python</p>
                                                        <p className="javaadv">Machine Learning with Python teaches how to build predictive models and analyze data using Python libraries and algorithms.</p>
                                                    </div>
                                                    <div className="d-flex mt-5">
                                                        <p className="javaadv"><FontAwesomeIcon icon={faClock} className="iconjava" /> 35 hours</p>
                                                        <p className="ms-5 javaadv"><FontAwesomeIcon icon={faUserGroup} className="iconjava" /> 534 students</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <p>
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        </p>
                                                        <p className="javaadv ms-2">4.7 (73 reviews)</p>
                                                    </div>
                                                    <div className="line line5"></div>
                                                    <div className="d-flex mt-3">
                                                        <div>
                                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-f-12.webp" className="rounded-5" height={40} width={40} />
                                                        </div>
                                                        <p className="ms-3 mt-1 fw-bold">Prof. Anna Chen</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button className="btn btn-lg enroll3">Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row mt-4 mb-5">
                                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                                            <div className="card rounded-4">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/courses-9.webp" className="card-img-top rounded-top-4" height={260} />
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <p className="prointer">Marketing</p>
                                                        <p className="ms-3 interpro">Intermediate</p>
                                                    </div>
                                                    <div>
                                                        <p className="advjava">Social Media Marketing</p>
                                                        <p className="javaadv">Social Media Marketing involves using platforms like Facebook, Instagram, and Twitter to build brand awareness and engage audiences.</p>
                                                    </div>
                                                    <div className="d-flex mt-5">
                                                        <p className="javaadv"><FontAwesomeIcon icon={faClock} className="iconjava" /> 12 hours</p>
                                                        <p className="ms-5 javaadv"><FontAwesomeIcon icon={faUserGroup} className="iconjava" /> 3,457 students</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <p>
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        </p>
                                                        <p className="javaadv ms-2">4.5 (234 reviews)</p>
                                                    </div>
                                                    <div className="line line5"></div>
                                                    <div className="d-flex mt-3">
                                                        <div>
                                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-m-5.webp" className="rounded-5" height={40} width={40} />
                                                        </div>
                                                        <p className="ms-3 mt-1 fw-bold">Michael Davis</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button className="btn btn-lg enroll3">Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                                            <div className="card rounded-4">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/courses-14.webp" className="card-img-top rounded-top-4" height={260} />
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <p className="prointer">Design</p>
                                                        <p className="ms-3 interpro">Intermediate</p>
                                                    </div>
                                                    <div>
                                                        <p className="advjava">Graphic Design Mastery</p>
                                                        <p className="javaadv">Graphic Design Mastery focuses on developing creative skills to design visually compelling content using industry-standard tools and techniques.</p>
                                                    </div>
                                                    <div className="d-flex mt-5">
                                                        <p className="javaadv"><FontAwesomeIcon icon={faClock} className="iconjava" /> 18 hours</p>
                                                        <p className="ms-5 javaadv"><FontAwesomeIcon icon={faUserGroup} className="iconjava" /> 1,892 students</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <p>
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                            <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                        </p>
                                                        <p className="javaadv ms-2">4.9 (127 reviews)</p>
                                                    </div>
                                                    <div className="line line5"></div>
                                                    <div className="d-flex mt-3">
                                                        <div>
                                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-f-9.webp" className="rounded-5" height={40} width={40} />
                                                        </div>
                                                        <p>Lisa Martinez</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button className="btn btn-lg enroll3">Enroll Now</button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-6 col-md-6 col-12 mb-4">
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