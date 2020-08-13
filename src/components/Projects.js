import React from "react"
import Thumbnail from './Thumbnail.js';
import pic1 from "../portpics/readme screen cap.png"
import pic2 from "../portpics/generator website.png"
import pic3 from "../portpics/NYME project photo.png"
import pic4 from "../portpics/quiz screen cap.png"
import pic5 from "../portpics/social streaming cap.png"
import pic6 from "../portpics/day planner.png"




 
function Projects (props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        deployedlink= "https://jben817.github.io/Homework5/"
        image={pic6}
        title="NYME Project"
        gitlink= "https://github.com/jben817/Homework5"
      />
       <Thumbnail
        deployedlink="https://jben817.github.io/Homework3/"
        image={pic2}
        title="Password Generator"
        gitlink="https://github.com/jben817/Homework3"

      />
       <Thumbnail
        deployedlink="https://mjb527.github.io/NYME/"
        image={pic3}
        title="NYME Project"
        gitlink="https://github.com/jben817/Homework4"

      />
       <Thumbnail
        deployedlink="https://ru-project2.herokuapp.com/index.html"
        image={pic5}
        title="Social Streaming"
        gitlink="https://github.com/jben817/Social-Streaming"

      />
       <Thumbnail
        deployedlink="https://drive.google.com/file/d/1Sqe5XhZTGD7PfA0530v5deS-QQFbCdci/view"
        image={pic1}
        title="Readmd Generator"
        gitlink="https://github.com/jben817/Homework9"

      />
       <Thumbnail
        deployedlink="https://jben817.github.io/Homework4/"
        image={pic4}
        title="Javascript Quiz"
        gitlink="https://github.com/jben817/Homework4"
      />

      
    </div>
  )
}
 
export default Projects;