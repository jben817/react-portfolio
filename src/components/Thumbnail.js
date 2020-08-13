import React from 'react';


function Thumbnail(props) {
  return (
    <div className="project">
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <strong>Project Title:</strong> {props.title}
            <hr></hr>
            
           <a  href={props.gitlink}>
              <strong> GitHub Link</strong>
           </a>
           <hr></hr>

           <a href= {props.deployedlink}>
           <strong> Deployed Link</strong>

           </a>

            
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Thumbnail;
