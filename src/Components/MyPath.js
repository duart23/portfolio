import React from "react";
import "../Styles/MyPath.css";

const pathData = [
  {
    id: 1,
    title: "Looking for Internship",
    postion: "Software Enginnering",
    place: "Hit me up",
    date: "Present",
  },
  {
    id: 2,
    title: "Higher Education",
    postion: "Software Technology Engineering",
    place: "VIA University College",
    date: "2022 - Present",
  },
  {
    id: 3,
    title: "High School",
    postion: "Science and Technologies",
    place: "Escola Secundária Ibn Mucana",
    date: "2018 - 2021",
  },
];

const MyPath = (title, position, place, date) => {
  return (
    <div id="mypath" className="myPath-container primary py-5">
      <h2>My Path</h2>
      <div className="myPath-timeline position-relative m-0">
        {pathData.map((item) => (
          <div
            key={item.id}
            className={`myPath-card ${item.id % 2 === 0 ? "right" : "left"} d-flex`}
            // w-50 py-2 px-5 position-relative
          >
            <div className="myPath-card-outside justify-items-center">
              <h2 className="myPath-card-title m-0 mb-4 fw-normal" >{item.date}</h2>
            <div className="myPath-card-content secondary py-4 px-5 position-relative">
              <p>{item.title}</p>
              <p>{item.postion}</p>
              <p className="mb-0">{item.place}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPath;
