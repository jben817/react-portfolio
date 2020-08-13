import React from "react"
import * as ReactBootStrap from "react-bootstrap";

 
function Contact(props) {
  return (
    <div>
<ReactBootStrap.Form>
  <ReactBootStrap.Form.Group controlId="exampleForm.ControlInput1">
    <ReactBootStrap.Form.Label>Name</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="name" placeholder="Name" />
    <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="email" placeholder="email@whatever.com" />
  </ReactBootStrap.Form.Group>
   <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
    <ReactBootStrap.Form.Label>Message</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control as="textarea" rows="3" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Button as="input" type="submit" value="Submit" />{' '}

</ReactBootStrap.Form>
</div>
  )
}
 
export default Contact;