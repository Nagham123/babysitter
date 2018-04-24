import React, { Component } from "react";
import memberForm from './pages/memberForm.css' 

export default class MemberForm extends Component {
    render() {
        return (
        <div className="member-wrapper">
            <div className="all" >
                <h3> Member form:
                </h3>
                First Name:
                <br />
                <input type="text" name="fname" />
                <br /> Last Name:
                <br />
                <input type="text" name="lname" />
                <br /> Phone Number:
                <br />
                <input type="number" name="phone" />
                <br /> Email:
                <br />
                <input type="email" name="email" />
                <br /> Birthday:
                <input type="date" name="bday" />
                <br /> resume:
                <input type="file" name="resume" />
                <br /> Picture:
                <input type="file" name="resume" />
                <br />
            </div>
        </div>
        )
    }
}