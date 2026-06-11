import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBullhorn, faCamera, faChartLine, faChartSimple, faCode, faGavel, faGear, faGlobe, faHeartbeat, faLaptop, faMortarPestle, faMusic, faPalette, faPen, faShield, faStar, faStarHalfStroke, faTimeline, faTree, faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faBehance, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faXbox, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg p-3 sticky-top" id="navbar" >
                    <div class="container">
                        <a class="navbar-brand navbarbrand" href="#">Learner<div></div></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active navlink1" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  navlink1" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navlink1" href="/courses">Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navlink1" href="/instructor">Instructors</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle navlink1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Pages
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/enrolldetails">EnrollDetails</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="">
                                <Link to={'/enroll'}><button className="btn btn-lg rounded-pill enroll1">Enroll Now</button></Link>
                            </div>
                        </div>
                    </div>
                </nav>


                {/* home */}


                <div className="home">


                    <div className="blur">
                        <img src="https://media.licdn.com/dms/image/v2/C5612AQEbXcrYeAMStA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520171873000?e=2147483647&v=beta&t=uIp1dYdk3SarRTe9Mitwlai0ZAEIozy3GB-yRyjEaik" alt="home image" className="wallpaper" />
                    </div>

                    <div class="card-img-overlay left">
                        <h5 class="card-title transform">Transform Your Future<br />with Expert-Led Online<br />Courses</h5>
                        <p class="card-text mt-4 discover">Discover thousands of high-quality courses designed by industry<br />professionals. Learn at your own pace, gain in-demand skills, and<br />advance your career from anywhere in the world.</p>
                        <div className="number mt-4">
                            <p className="card-text num">50000</p>
                            <p className="card-text ms-4 num">1200</p>
                            <p className="card-text ms-5 num">98</p>
                        </div>
                        <div className="student">
                            <p className="card-text stu">Students Enrolled</p>
                            <p className="card-text ms-4 stu">Expert Courses</p>
                            <p className="card-text ms-4 stu">Success Rate %</p>
                        </div>
                        <div className="certified mt-5">
                            <p className="cert"><FontAwesomeIcon icon={faShield} size="lg" /> Certified Programs</p>
                            <p className="cert ms-4"><FontAwesomeIcon icon={faClock} size="lg" />Lifetime Access</p>
                            <p className="cert ms-4"><FontAwesomeIcon icon={faUserGroup} size="lg" /> Expert Instructors</p>
                        </div>
                    </div>

                    <div className="card-img-overlay">
                        <div className="homeimg">
                            <img src="https://images.pexels.com/photos/6285288/pexels-photo-6285288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="home image1" class="card-img  rounded-5 " />
                            <div className="card-img-overlay webui">
                                <div className="web">
                                    <div className="icon1">
                                        <p className="facode"><FontAwesomeIcon icon={faCode} /></p>
                                    </div>
                                    <div>
                                        <p className="ms-3 mt-2">Web Development</p>
                                        <p className="ms-3 nofostu">2,450 Students</p>
                                    </div>
                                </div>
                                <div className="ui">
                                    <div className="icon1">
                                        <p className="facode"><FontAwesomeIcon icon={faPalette} /></p>
                                    </div>
                                    <div>
                                        <p className="ms-3 mt-2">UI/UX Design</p>
                                        <p className="ms-3 nofostu">1,890 Students</p>
                                    </div>
                                </div>
                                <div className="digital">
                                    <div className="icon1">
                                        <p className="facode"><FontAwesomeIcon icon={faChartLine} /></p>
                                    </div>
                                    <div>
                                        <p className="ms-3 mt-2">Digital Marketing</p>
                                        <p className="ms-3 nofostu">3,200 Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* featured courses */}

                    <div className="container">
                        <div class="featured">
                            <div class="line line1"></div>
                            Featured Courses
                            <div class="line line1"></div>
                        </div>
                        <p className="master">Master in-demand skills with featured courses—all in one place</p>
                        <div className="imgcard">
                            <div className="row">
                                <div className="col">
                                    <div class="card border-light rounded-4 img1">
                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/students-9.webp" alt="course image" class="card-img-top rounded-top-4" height={230} />
                                        <div className="card-img-overlay status">
                                            <p className="update">FEATURED</p>
                                            <p className="cash">$149</p>
                                        </div>
                                        <div class="card-body">
                                            <div className="begweek">
                                                <p className="beginner ms-2">Beginner</p>
                                                <p className="week">8 Weeks</p>
                                            </div>
                                            <h5 class="card-title ms-2 cour">Digital Marketing Fundamentals</h5>
                                            <p class="card-text ms-2">Learn the essentials of SEO, social media, email marketing, and more with Digital Marketing Fundamentals.</p>
                                            <div className="namimg">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-f-3.webp" alt="course1" className="rounded-5 mt-2 ms-2" height={40} />
                                                <div className="ms-3">
                                                    <p className="name">Sarah Johnson</p>
                                                    <p className="expert1">Marketing Expert</p>
                                                </div>
                                            </div>
                                            <div className="line mt-2 line2"></div>
                                            <div className="d-flex staruse">
                                                <div className="d-flex">
                                                    <p className="fastar">
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStarHalfStroke} />
                                                    </p>
                                                    <p className="ms-2">(4.5)</p>
                                                </div>
                                                <div className="d-flex userstud">
                                                    <p className="fausergroup">
                                                        <FontAwesomeIcon icon={faUserGroup} />
                                                    </p>
                                                    <p>342 students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to={'/enroll'}></Link><button className="btn mt-3 enroll2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="card border-light rounded-4 img1">
                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/campus-4.webp" alt="course2" class="card-img-top rounded-top-4" height={230} />
                                        <div className="card-img-overlay status">
                                            <p className="update">FEATURED</p>
                                            <p className="cash">$149</p>
                                        </div>
                                        <div class="card-body">
                                            <div className="begweek">
                                                <p className="beginner ms-2">Beginner</p>
                                                <p className="week">8 Weeks</p>
                                            </div>
                                            <h5 class="card-title ms-2">Web Development with JavaScript</h5>
                                            <p class="card-text ms-2">JavaScript enables dynamic, interactive web development for both front-end and back-end applications efficiently.</p>
                                            <div className="namimg">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-m-5.webp" alt="course3" className="rounded-5 mt-2 ms-2" height={40} />
                                                <div className="ms-3">
                                                    <p className="name">Michael Chen</p>
                                                    <p className="expert1">Full Stack Developer</p>
                                                </div>
                                            </div>
                                            <div className="line mt-2 line2"></div>
                                            <div className="d-flex staruse">
                                                <div className="d-flex">
                                                    <p className="">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="ms-2">(5.0)</p>
                                                </div>
                                                <div className="d-flex userstud">
                                                    <p>
                                                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#0d56d3", }} />
                                                    </p>
                                                    <p className="">156 students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn mt-3 enroll2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="card border-light rounded-4 img1">
                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/students-7.webp" alt="course4" class="card-img-top rounded-top-4" height={230} />
                                        <div className="card-img-overlay status">
                                            <p className="update">FEATURED</p>
                                            <p className="cash">$149</p>
                                        </div>
                                        <div class="card-body">
                                            <div className="begweek">
                                                <p className="beginner ms-2">Beginner</p>
                                                <p className="week ">8 Weeks</p>
                                            </div>
                                            <h5 class="card-title ms-2">Introduction to Data Science</h5>
                                            <p class="card-text ms-2">Data Science involves extracting insights from data using statistics, programming, and machine learning techniques.</p>
                                            <div className="namimg">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-f-7.webp" alt="course5" className="rounded-5 mt-2 ms-2" height={40} />
                                                <div className="ms-3">
                                                    <p className="name">Dr. Emily Watson</p>
                                                    <p className="expert1">Data Scientist</p>
                                                </div>
                                            </div>
                                            <div className="line mt-2 line2"></div>
                                            <div className="d-flex staruse">
                                                <div className="d-flex">
                                                    <p className="">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="ms-2">(4.2)</p>
                                                </div>
                                                <div className="d-flex userstud">
                                                    <p>
                                                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#0d56d3", }} />
                                                    </p>
                                                    <p className="">789 students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn mt-3 enroll2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col mt-5">
                                    <div class="card border-light rounded-4 img1">
                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/education-5.webp" alt="course6" class="card-img-top rounded-top-4" height={230} />
                                        <div className="card-img-overlay status">
                                            <p className="update">FEATURED</p>
                                            <p className="cash">$149</p>
                                        </div>
                                        <div class="card-body">
                                            <div className="begweek">
                                                <p className="beginner ms-2">Beginner</p>
                                                <p className="week">8 Weeks</p>
                                            </div>
                                            <h5 class="card-title ms-2">Business Strategy & Leadership</h5>
                                            <p class="card-text ms-2">Business Strategy & Leadership involves guiding organizations toward goals through planning, decision-making, and effective leadership.</p>
                                            <div className="namimg">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-m-8.webp" alt="course6" className="rounded-5 mt-2 ms-2" height={40} />
                                                <div className="ms-3">
                                                    <p className="name">Robert Anderson</p>
                                                    <p className="expert1">Business Consultant</p>
                                                </div>
                                            </div>
                                            <div className="line mt-2 line2"></div>
                                            <div className="d-flex staruse">
                                                <div className="d-flex">
                                                    <p className="">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="ms-2">(4.7)</p>
                                                </div>
                                                <div className="d-flex userstud">
                                                    <p>
                                                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#0d56d3", }} />
                                                    </p>
                                                    <p className="">234 students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn mt-3 enroll2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-5">
                                    <div class="card border-light rounded-4 img1">
                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/activities-3.webp" alt="course6" class="card-img-top rounded-top-4" height={230} />
                                        <div className="card-img-overlay status">
                                            <p className="update">FEATURED</p>
                                            <p className="cash">$149</p>
                                        </div>
                                        <div class="card-body">
                                            <div className="begweek">
                                                <p className="beginner ms-2">Beginner</p>
                                                <p className="week">8 Weeks</p>
                                            </div>
                                            <h5 class="card-title ms-2">Graphic Design Masterclass</h5>
                                            <p class="card-text ms-2">Graphic Design Masterclass teaches visual communication skills using design principles, tools, and creative project techniques.</p>
                                            <div className="namimg">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-f-12.webp" alt="course6" className="rounded-5 mt-2 ms-2" height={40} />
                                                <div className="ms-3">
                                                    <p className="name">Lisa Martinez</p>
                                                    <p className="expert1">Creative Director</p>
                                                </div>
                                            </div>
                                            <div className="line mt-2 line2"></div>
                                            <div className="d-flex staruse">
                                                <div className="d-flex">
                                                    <p className="">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="ms-2">(4.3)</p>
                                                </div>
                                                <div className="d-flex userstud">
                                                    <p>
                                                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#0d56d3", }} />
                                                    </p>
                                                    <p className="">467 students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn mt-3 enroll2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-5">
                                    <div class="card border-light rounded-4 img1">
                                        <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-6.webp" alt="course6" class="card-img-top rounded-top-4" height={230} />
                                        <div className="card-img-overlay status">
                                            <p className="update">FEATURED</p>
                                            <p className="cash">$149</p>
                                        </div>
                                        <div class="card-body">
                                            <div className="begweek">
                                                <p className="beginner ms-2">Beginner</p>
                                                <p className="week">8 Weeks</p>
                                            </div>
                                            <h5 class="card-title ms-2">Photography for Beginners</h5>
                                            <p class="card-text ms-2">Photography for Beginners teaches basic camera skills, composition, lighting, and techniques to capture better photos.</p>
                                            <div className="namimg">
                                                <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/person/person-m-11.webp" alt="course6" className="rounded-5 mt-2 ms-2" height={40} />
                                                <div className="ms-3">
                                                    <p className="name">James Wilson</p>
                                                    <p className="expert1">Professional Photographer</p>
                                                </div>
                                            </div>
                                            <div className="line mt-2 line2"></div>
                                            <div className="d-flex staruse">
                                                <div className="d-flex">
                                                    <p className="">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                                        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B", }} />
                                                    </p>
                                                    <p className="ms-2">(4.6)</p>
                                                </div>
                                                <div className="d-flex userstud">
                                                    <p>
                                                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#0d56d3", }} />
                                                    </p>
                                                    <p className="">298  students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn mt-3 enroll2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-lg rounded-pill mt-3 viealcou">View All Courses</button>
                            </div>
                        </div>
                    </div>

                    {/* Course Categories */}

                    <div className="container coucat">
                        <div class="featured">
                            <div class="line line1"></div>
                            Course Categories
                            <div class="line line1"></div>
                        </div>
                        <p className="master">Explore a wide range of courses from programming, AI, and web development to business, design, and personal growth, empowering you with skills for today’s digital world.</p>
                        <div className="row mt-5">
                            <div className="col-2">
                                <div className="text-center computer">
                                    <p className=" fs-4 iconc"><FontAwesomeIcon icon={faLaptop} style={{ color: "#ffffff", }} /></p>
                                    <p className=" coursenam">Computer Science</p>
                                    <p className=" nocourse">24 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="business">
                                    <p className="text-center fs-4 iconb"><FontAwesomeIcon icon={faBriefcase} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Business</p>
                                    <p className="text-center nocourse">18 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="design">
                                    <p className="text-center fs-4 icond"><FontAwesomeIcon icon={faPalette} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Design</p>
                                    <p className="text-center nocourse">15 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="health">
                                    <p className="text-center fs-4 iconh"><FontAwesomeIcon icon={faHeartbeat} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Health & Medical</p>
                                    <p className="text-center nocourse">12 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="languages">
                                    <p className="text-center fs-4 iconla"><FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Languages</p>
                                    <p className="text-center nocourse">21 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="science">
                                    <p className="text-center fs-4 icons"><FontAwesomeIcon icon={faTimeline} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Science</p>
                                    <p className="text-center nocourse">16 Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className="marketing">
                                    <p className="text-center fs-4 iconma"><FontAwesomeIcon icon={faBullhorn} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Marketing</p>
                                    <p className="text-center nocourse">19 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="finance">
                                    <p className="text-center fs-4 iconf"><FontAwesomeIcon icon={faChartLine} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Finance</p>
                                    <p className="text-center nocourse">14 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="photography">
                                    <p className="text-center fs-4 iconp"><FontAwesomeIcon icon={faCamera} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Photography</p>
                                    <p className="text-center nocourse">11 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="music">
                                    <p className="text-center fs-4 iconmu"><FontAwesomeIcon icon={faMusic} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Music</p>
                                    <p className="text-center nocourse">13 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="engineering">
                                    <p className="text-center fs-4 icone"><FontAwesomeIcon icon={faGear} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Engineering</p>
                                    <p className="text-center nocourse">22 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="law">
                                    <p className="text-center fs-4 iconle"><FontAwesomeIcon icon={faGavel} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Law & Legal</p>
                                    <p className="text-center nocourse">9 Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className="culinary">
                                    <p className="text-center fs-4 iconcu"><FontAwesomeIcon icon={faMortarPestle} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Culinary Arts</p>
                                    <p className="text-center nocourse">8 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="sports">
                                    <p className="text-center fs-4 iconsp"><FontAwesomeIcon icon={faTrophy} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Sports & Fitness</p>
                                    <p className="text-center nocourse">17 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="writing">
                                    <p className="text-center fs-4 iconw"><FontAwesomeIcon icon={faPen} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Writing</p>
                                    <p className="text-center nocourse">10 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="psychology">
                                    <p className="text-center fs-4 iconps"><FontAwesomeIcon icon={faChartSimple} rotation={90} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Psychology</p>
                                    <p className="text-center nocourse">12 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="environment">
                                    <p className="text-center fs-4 iconenv"><FontAwesomeIcon icon={faTree} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Environment</p>
                                    <p className="text-center nocourse">7 Courses</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="communication">
                                    <p className="text-center fs-4 iconcom"><FontAwesomeIcon icon={faCommentDots} style={{ color: "#ffffff", }} /></p>
                                    <p className="text-center coursenam">Communication</p>
                                    <p className="text-center nocourse">15 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* featured instructors */}
                    <div className="container featinst">
                        <div class="instructors">
                            <div class="line line3"></div>
                            Featured Instructors
                            <div class="line line3"></div>
                        </div>
                        <p className="master">Featured Instructors are expert educators highlighted for their exceptional teaching and industry experience.</p>
                        <div className="row mt-5">
                            <div className="col instfeat">
                                <div class="card">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-2.webp" alt="course6" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title trainer">Sarah Johnson</h5>
                                        <p class="card-text trainercourse">Web Development</p>
                                        <p className="card-text text-secondary fs-6">Web Development involves building and maintaining websites and web applications using coding, design, and technical tools.</p>
                                        <div className=" card-text d-flex studrate">
                                            <div className="text-center studcen">
                                                <p className="studno">2.1k</p>
                                                <p className="studwor">STUDENTS</p>
                                            </div>
                                            <div className="text-center ms-5">
                                                <p className="studno">4.8</p>
                                                <p className="studwor">RATING</p>
                                            </div>
                                        </div>
                                        <div className="card-text d-flex mt-4">
                                            <button className="btn rounded-pill viepro"> View Profile</button>
                                            <div className="">
                                                <button className="btn btn-sm iconsocial"><FontAwesomeIcon icon={faLinkedin} /></button>
                                                <button className="btn btn-sm ms-1 iconsocial1"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col instfeat">
                                <div class="card">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-7.webp" alt="course6" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title trainer">Michael Chen</h5>
                                        <p class="card-text trainercourse">Data Science</p>
                                        <p className="card-text text-secondary fs-6">Data Science combines statistics, programming, and domain knowledge to extract insights and make data-driven decisions.</p>
                                        <div className=" card-text d-flex studrate">
                                            <div className="text-center studcen">
                                                <p className="studno">3.5k</p>
                                                <p className="studwor">STUDENTS</p>
                                            </div>
                                            <div className="text-center ms-5">
                                                <p className="studno">4.9</p>
                                                <p className="studwor">RATING</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <button className="btn rounded-pill viepro"> View Profile</button>
                                            <div>
                                                <button className="btn btn-sm iconsocial"><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="btn btn-sm ms-1 iconsocial1"><FontAwesomeIcon icon={faLinkedin} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col instfeat">
                                <div class="card">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-4.webp" alt="course6" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title trainer">Amanda Rodriguez</h5>
                                        <p class="card-text trainercourse">UX Design</p>
                                        <p className="card-text text-secondary fs-6">UX Design focuses on creating meaningful and user-friendly experiences through intuitive and efficient product design.</p>
                                        <div className=" card-text d-flex studrate">
                                            <div className="text-center studcen">
                                                <p className="studno">1.8k</p>
                                                <p className="studwor">STUDENTS</p>
                                            </div>
                                            <div className="text-center ms-5">
                                                <p className="studno">4.6</p>
                                                <p className="studwor">RATING</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <button className="btn rounded-pill viepro"> View Profile</button>
                                            <div>
                                                <button className="btn btn-sm iconsocial"><FontAwesomeIcon icon={faXbox} /></button>
                                                <button className="btn btn-sm ms-1 iconsocial1"><FontAwesomeIcon icon={faBehance} size="sm" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col instfeat">
                                <div class="card">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/teacher-9.webp" alt="course6" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title trainer">David Thompson</h5>
                                        <p class="card-text trainercourse">Digital Marketing</p>
                                        <p className="card-text text-secondary fs-6">Digital Marketing involves promoting products or services through online platforms to reach and engage target audiences.</p>
                                        <div className=" card-text d-flex studrate">
                                            <div className="text-center studcen">
                                                <p className="studno">2.9k</p>
                                                <p className="studwor">STUDENTS</p>
                                            </div>
                                            <div className="text-center ms-5">
                                                <p className="studno">4.7</p>
                                                <p className="studwor">RATING</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <button className="btn rounded-pill viepro"> View Profile</button>
                                            <div>
                                                <button className="btn btn-sm iconsocial"><FontAwesomeIcon icon={faInstagram} /></button>
                                                <button className="btn btn-sm ms-1 iconsocial1"><FontAwesomeIcon icon={faFacebook} /></button>
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
                                <div className="col-6">
                                    <p className="navbarbrand">Learner</p>
                                    <p className="leaknow">A learner is someone who actively seeks knowledge, skills, or understanding through study or experience.They embrace curiosity and growth, continuously evolving through education and practice.</p>
                                    <div className="d-flex">
                                        <p className="iconfoot"><FontAwesomeIcon icon={faXTwitter} className="ms-3" /></p>
                                        <p className="iconfoot ms-3"><FontAwesomeIcon icon={faFacebook} className="ms-3" /></p>
                                        <p className="iconfoot ms-3"><FontAwesomeIcon icon={faInstagram} className="ms-3" /></p>
                                        <p className="iconfoot ms-3"><FontAwesomeIcon icon={faLinkedin} className="ms-3" /></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <p className="uselink">Useful Links</p>
                                    <div className="linkuse">
                                        <p>Home</p>
                                        <p>About us</p>
                                        <p>Services</p>
                                        <p>Terms of service</p>
                                        <p>Privacy policy</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <p className="uselink">Our Services</p>
                                    <div className="linkuse">
                                        <p>Web Design</p>
                                        <p>Web Development</p>
                                        <p>Product Management</p>
                                        <p>Marketing</p>
                                        <p>Graphic Design</p>
                                    </div>
                                </div>
                                <div className="col-2">
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