import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAward, faClock, faTrophy, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Enroll() {
    var { id } = useParams
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [selectcourse, setSelectcourse] = useState('')
    const [education, setEducation] = useState('')
    const [experience, setExperience] = useState('')
    const [motivate, setMotivate] = useState('')
    const [learn, setLearn] = useState('')

    useEffect(() => {
        fetch("https://learner-production-a680.up.railway.app/enroll/" + id)
            .then(res => res.json())
            .then((data) => {
                setFname(data[0].fname)
                setLname(data[0].lname)
                setEmail(data[0].email)
                setPhoneno(data[0].phoneno)
                setSelectcourse(data[0].selectcourse)
                setEducation(data[0].education)
                setExperience(data[0].experience)
                setMotivate(data[0].motivate)
                setLearn(data[0].learn)
            })
    }, [])
    function enroll(event) {
        event.preventDefault()
        var fname = document.getElementById("fname").value
        var lname = document.getElementById("lname").value
        var email = document.getElementById("email").value
        var phoneno = document.getElementById("phoneno").value
        var selectcourse = document.getElementById("selectcourse").value
        var education = document.getElementById("education").value
        var experience = document.getElementById("experience").value
        var motivate = document.getElementById("motivate").value
        var learn = document.getElementById("learn").value

        var key = {
            fname: fname,
            lname: lname,
            email: email,
            phoneno: phoneno,
            selectcourse: selectcourse,
            education: education,
            experience: experience,
            motivate: motivate,
            learn: learn,

        }
        if (fname === "") {
            alert("Enter the Firstname");
        }
        else if (lname === "") {
            alert("Enter the Lastname");
        }
        else if (email === "") {
            alert("Enter the Email");
        }
        else if (phoneno === "") {
            alert("Enter the Phone number");
        }
        else if (selectcourse === "") {
            alert("Select the Course");
        }
        else if (education === "") {
            alert("Education");
        }
        else if (experience === "") {
            alert("Experience");
        }
        else if (motivate === "") {
            alert("enter motivate");
        }
        else if (learn === "") {
            alert("Learn");
        }

        else {
            axios.post("https://learner-production-a680.up.railway.app/enroll/", key)
                .then((upddet) => {
                    if (upddet.data.status === 'error') {
                        alert(upddet)
                        alert("enroll not added")
                        console.log("not_added")
                    }
                    else if (upddet.data.status === 'success') {
                        alert("enroll added successfully!")
                        console.log("success")
                    }
                })
        }

    }


    return (
        <>
            <div className="enroll">
                <nav className="navbar navbar-expand-lg p-3 sticky-top" id="navbar" >
                    <div className="container">
                        <a className="navbar-brand navbarbrand" href="#">Learner<div></div></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active navlink1" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  navlink1" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navlink1" href="/courses">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navlink1" href="/instructor">Instructors</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navlink1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

                <div>
                    <nav className="navbar navbar-expand-lg p-3" id="abouthom">
                        <div className="container">
                            <a className="navbar-brand navbarbrand1" href="#">Enrollment</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navbarlin" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <a className="nav-link navlink2" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li>
                                        <p className="nav-link">/</p>
                                    </li>
                                    <li>
                                        <a className="nav-link">Enroll</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* enrollhom */}

                <div className="container mt-5 mb-5">
                    <div>
                        <h5 className="text-center">Enroll in Your Dream Course</h5>
                        <p className="text-center">Take the next step in your educational journey. Complete the form below to secure your spot in our comprehensive online learning program.</p>
                    </div>
                    <form onSubmit={enroll}>
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-12 mb-3">
                                <label>First Name*</label>
                                <input type="text" className="form-control" id="fname" />
                                <label className="mt-4">Email Address*</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mb-3">
                                <label>Last Name*</label>
                                <input type="text" className="form-control" id="lname" />
                                <label className="mt-4">Phone Number*</label>
                                <input type="text" className="form-control" id="phoneno" />
                            </div>
                        </div>
                        <div className="px-3">
                            <label className="mt-4">Select Course *</label>
                            <div className="col-auto">
                                <select className="form-select" id="selectcourse">
                                    <option>Choose a course...</option>
                                    <option>Full Stack Web Development</option>
                                    <option>Data Science & Analytics</option>
                                    <option>Digital Marketing Mastery</option>
                                    <option>UI/UX Design Fundamentals</option>
                                    <option>Cybersecurity Essentails</option>
                                    <option>Mobile App Development</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-6 col-md-6 col-12 mb-3">
                                <label>Education Level</label>
                                <select className="form-select" id="education">
                                    <option>Select your education level...</option>
                                    <option>High School</option>
                                    <option>Associate Degree</option>
                                    <option>Bachelor's Degree</option>
                                    <option>Master's Degree</option>
                                    <option>Doctorate</option>
                                    <option>Other</option>

                                </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mb-3">
                                <label>Experience Level</label>
                                <select className="form-select" id="experience">
                                    <option>Select your experience...</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                    <option>Expert</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ms-4 me-4">
                                <label className="mt-4">What motivates you to take this course?</label>
                                <textarea className="form-control" rows="4" cols="15" id="motivate"></textarea>
                            </div>
                        </div>
                        <div className="col ms-4 me-4">
                            <label className="mt-4">Preferred Learning Schedule</label>
                            <select className="form-select" id="learn">
                                <option>Weekdays (Monday - Friday)</option>
                                <option>Weekends (Saturday - Sunday)</option>
                                <option>Flexible (Self-paced)</option>
                            </select>
                            {/* <input type="radio" name="weekdays" id="learn" />Weekdays (Monday - Friday)<br />
                                    <input type="radio" name="weekdays" id="learn1" />Weekends (Saturday - Sunday)<br />
                                    <input type="radio" name="weekdays" id="learn2" />Flexible (Self-paced) */}
                        </div>
                        <div className="mt-5 text-center">
                            <button type="submit" value="enroll" className="enroll4 btn btn-lg ">Enroll now</button>
                        </div>
                    </form>
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