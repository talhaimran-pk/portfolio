import React from "react";
import Card from "react-bootstrap/Card";
import nGage from "../../Assets/ngage logo.ico";
import {FaCaretRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am based in <a href="https://www.google.com/maps?q=Islamabad,Pakistan" target="_blank" rel="noopener noreferrer" className="teal-link">Islamabad, Pakistan</a>.
<br /> I am a Second Year student, pursuing a Bachelor's in Computer Science from <a href="https://www.biit.edu.pk/" target="_blank" rel="noopener noreferrer" className="teal-link">Barani Institute of Infrmaion Technology</a>.
<br /> My interests are centered around Exploring different Technologies. With some hands-on experience in working with Semester projects, I am a Front-End Intern as well at <a href="https://www.dplit.com/" target="_blank" rel="noopener noreferrer" className="teal-link">DPL</a>
<br/>
<br/>

          </p>
          <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What am I <strong className="teal">working</strong> on ?
            </h2>
          <ul style={{ listStyleType: "disc", paddingLeft: 30 }}>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /> <strong className="teal"> nGage </strong> <a href="https://ngageatwork.com/" target="_blank" rel="noopener noreferrer" ><img src={nGage} alt="nGage logo" style={{ width: "2%", height: "auto" }} /></a> <strong className="teal"> : </strong> Working as a Front-End Intern for the product.
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
