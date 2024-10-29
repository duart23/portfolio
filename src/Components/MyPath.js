import Card from "react-bootstrap/Card";
import React from "react";
import "../Styles/MyPath.css";

const pathData = [
    {
      title: 'High School',
      postion: 'Science and Technologies',
      place: 'Escola Secundária Ibn Mucana', 
      date: '2018 - 2021',
    },
    {
        title: 'Higher Education',
        postion: 'Software Technology Engineering',
        place: 'VIA University College', 
        date: '2022 - Present',
      }
    ]

const MyPath = (title, description, place, date) => {
  return (
    <div className="myPath-container">
      <h2>My Path</h2>
      <div className="cards">
        {pathData.map((item) => (
          <Card className="card">
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
              <Card.Text>{item.postion}</Card.Text>
              <Card.Text>{item.place}</Card.Text>
              <Card.Text>{item.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyPath;
