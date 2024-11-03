import React from "react";
import "../Styles/MyPath.css";

const pathData = [
  {
    id: 1,
    title: "High School",
    postion: "Science and Technologies",
    place: "Escola Secundária Ibn Mucana",
    date: "2018 - 2021",
  },
  {
    id: 2,
    title: "Higher Education",
    postion: "Software Technology Engineering",
    place: "VIA University College",
    date: "2022 - Present",
  },
];

const MyPath = (title, position, place, date) => {
  return (
    <div className="myPath-container">
      <h2>My Path</h2>
      <div className="myPath-timeline d-flex">
        {pathData.map((item) => (
          <div
            key={item.id}
            className={`myPath-card ${item.id % 2 === 0 ? "right" : "left"}`}
          >
            <div className="myPath-card-content">
              <h2>{item.date}</h2>
              <p>{item.title}</p>
              <p>{item.postion}</p>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPath;
