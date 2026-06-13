import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function EnrollUpdate() {
    var { id } = useParams()
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
        fetch("https://learner-production-a680.up.railway.app/singleenroll/" + id)
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
    function enrollupdate(event) {
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
        else if (learn === "") {
            alert("Learn");
        }

        else {
            axios.put("https://learner-production-a680.up.railway.app/enrollupdate/" + id, key)
                .then((upddet) => {
                    if (upddet.data.status === 'not_update') {
                        alert("data not updated")
                        console.log("not_updated")
                        console.log(key)
                    }
                    else if (upddet.data.status === 'success') {
                        alert("data updated successfully!")
                        console.log("success")
                    }
                })
        }
    }
    return (
        <>
            <div>
                <form onSubmit={enrollupdate}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                            <label>First Name*</label>
                            <input type="text" id="fname" className="form-control" value={fname} onChange={(e) => setFname(e.target.value)} />
                            <label>Email Address*</label>
                            <input type="text" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                            <label>Last Name*</label>
                            <input type="text" id="lname" className="form-control" value={lname} onChange={(e) => setLname(e.target.value)} />
                            <label>Phone Number*</label>
                            <input type="text" id="phoneno" className="form-control" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                        </div>
                    </div>

                    <div className="col ms-4 me-4">
                        <label>Select Course *</label>
                        <select className="form-select" id="selectcourse" value={selectcourse} onChange={(e) => setSelectcourse(e.target.value)}>
                            <option value="">Choose a course...</option>
                            <option>Full Stack Web Development</option>
                            <option>Data Science & Analytics</option>
                            <option>Digital Marketing Mastery</option>
                            <option>UI/UX Design Fundamentals</option>
                            <option>Cybersecurity Essentials</option>
                            <option>Mobile App Development</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                            <label>Education Level</label>
                            <select className="form-select" id="education" value={education} onChange={(e) => setEducation(e.target.value)}>
                                <option value="">Select your education level...</option>
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
                            <select className="form-select" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
                                <option value="">Select your experience...</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col ms-4 me-4">
                            <label>What motivates you to take this course?</label>
                            <textarea className="form-control" id="motivate" rows="4" cols="15" value={motivate} onChange={(e) => setMotivate(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                        <label>Preferred Learning Schedule</label>
                        <select className="form-select" id="learn" value={learn} onChange={(e) => setLearn(e.target.value)}>
                            <option value="">Select schedule...</option>
                            <option>Weekdays (Monday - Friday)</option>
                            <option>Weekends (Saturday - Sunday)</option>
                            <option>Flexible (Self-paced)</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <button type="submit" value="enroll" className="enroll3 btn ">Enroll now</button>
                    </div>
                </form>
            </div>
        </>
    );

}
