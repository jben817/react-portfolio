import React from "react"
import pic8 from "../portpics/oregon pic.jpg"
import pic10 from "../portpics/JB resume.pdf"
import "../components/about.css";
import { Card } from "react-bootstrap";
import {
    MDBCol,
    MDBRow,
    MDBContainer,
  } from "mdbreact";



function About(props) {
    return (
        <MDBContainer>
  <MDBRow>
    <MDBCol md="8">   
             <h1>About Me</h1>
             <Card  className="mb-3">
                    <img className="orpic" src={pic8} alt="oregon"></img>
                    <div id="nameDiv">Jaime Bennett, BSN-RN</div>
                </Card>

</MDBCol>
    <MDBCol md="4"><div>
                    <p id="aboutMe">

                    Graduated from Seton Hall University with a degree in Communications and worked for Dorf Feature
                    Services which covered local high school sports for The Star-Ledger and NJ.com for about 10 years.
                    Returned to Seton Hall in 2010 and received a second degree in Nursing where I have been working for
                    the last eight years. I specialize in inpatient psych and in the last year became a travel nurse working in Oregon, Utah and Vermont before settling back in New Jersey. Currently enrolled in Rutgers Coding Bootcamp.

                </p>
            </div>
</MDBCol>
  </MDBRow>
  <MDBRow>
  <div id="links" className="row">
            <div className="col">
                <a href="https://github.com/jben817">GitHub</a>
            </div>
            <div className="col">
                <a href={pic10}>Resume</a>
            </div>
            <div className="col">
                <a href="https://www.linkedin.com/in/jaime-bennett-30057b53/">Linkedin</a>
            </div>
        </div>
      </MDBRow>
</MDBContainer>
        
        



    
  )
}

export default About;