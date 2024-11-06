import React from "react";
import "../Styles/Skills.css";

const skillsData = [
  { id: 1, skill: "HTML", rating: 80 },
  { id: 2, skill: "CSS", rating: 70 },
  { id: 3, skill: "JavaScript", rating: 70 },
  { id: 4, skill: "React", rating: 75 },
  { id: 5, skill: "TypeScript" ,rating:50},
  { id: 6, skill: "Bootstrap" ,rating:70},
  { id: 7, skill: "Java" ,rating:65},
  { id: 8, skill: "C#/.NET" ,rating:70},
  { id: 9, skill: "SQL" ,rating:60},
  { id: 10, skill: "Talking" ,rating:75},
  { id: 11, skill: "Unity" ,rating:30},
  { id: 12, skill: "Blender" ,rating:30},
];

const Skills = () => {
  return (
    <div id="skills" className="skills-container py-4">
      <h2>Skills</h2>
      <div className="skills-card-outside d-flex f justify-content-center">
        <div className="skills-card secondary position-relative d-flex py-4 px-2">
          {skillsData.map((item) => (
            <div key={item.id} className="skill-progress p-4 d-flex ">
              <div className="skill-title fw-bold mx-3">{item.skill}</div>
              <div className="progress-container tertiary ">
              <div className="progress-bar"
              style={{ width: `${item.rating}%` }}>
          
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
