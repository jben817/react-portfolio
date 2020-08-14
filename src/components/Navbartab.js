import React from "react"
import * as ReactBootStrap from "react-bootstrap";


function Navbartab(props) {
    return (
        <div>
            <ReactBootStrap.Navbar bg="primary" expand="lg">
                <ReactBootStrap.Navbar.Brand href="/react-portfolio">Portfolio</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="/react-portfolio">About</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/react-portfolio/Projects">Portfolio Projects</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/react-portfolio/Contact">Contact Me</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>
    )
}

export default Navbartab;
