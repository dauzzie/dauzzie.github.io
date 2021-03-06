import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage[0].description;
      var noticeSkill = this.props.data.skillmessage[0].note;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree}   <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="minor">{education.minor}</p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
              <li className="details">{work.details[0].bullet1}</li>
              <li className="details">{work.details[0].bullet2}</li>
            </ul>
        </div>
      })
      var skills = this.props.data.skills.sort((a, b) => -1*(a.confidence-b.confidence)).map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
            <p id="note">
              {noticeSkill}
            </p>
        <code>
				<div className="bars" id="double">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
        </code>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
