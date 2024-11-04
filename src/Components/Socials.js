import Card from "react-bootstrap/Card";
import React from "react";
import "../Styles/Socials.css";
import Instagram from '../img/Instagram.png';
import LinkedIn from '../img/LinkedIn.png';
import GitHub from '../img/GitHub.png';
import Email from '../img/Email.png';

const socialsData = [
  {
    platform: "Instagram",
    username: "@duarte_pfj",
    img: Instagram,
    link: 'https://www.instagram.com/duarte_pfj/',
  },
  {
    platform: "LinkedIn",
    username: "@duarte_pfj",
    img: LinkedIn,
    link: 'https://www.linkedin.com/in/duarte-jorge-1226022b4/',
  },
  {
    platform: "GitHub",
    username: "@duart23",
    img: GitHub,
    link: 'https://github.com/duart23',
  },
  {
    platform: "Email",
    username: "duarte.peixoto.jorge@gmail.com",
    img: Email,
    link: "mailto:duarte.peixoto.jorge@gmail.com",
  },
];

const Socials = () => {
  return (
    <div className="socials-container">
      <div className="cards">
        {socialsData.map((item) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.platform} className="card-link">
            <div className="socials-card d-flex">
              <img src={item.img} alt={item.platform}/>
              <p>{item.username}</p>
            </div>
          {/* <Card className="card-socials">
            <Card.Body className="d-flex align-items-center card-body-socials">
              <Card.Img className="card-img me-2" alt={item.platform} src={item.img} />
              <Card.Text className="mb-0">{item.username}</Card.Text>
            </Card.Body>
          </Card> */}
        </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
