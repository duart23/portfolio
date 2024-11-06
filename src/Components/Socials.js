import React from "react";
import "../Styles/Socials.css";
import Instagram from "../img/Instagram.png";
import LinkedIn from "../img/LinkedIn.png";
import GitHub from "../img/GitHub.png";

const socialsData = [
  {
    platform: "Instagram",
    username: "@duarte_pfj",
    img: Instagram,
    link: "https://www.instagram.com/duarte_pfj/",
  },
  {
    platform: "LinkedIn",
    username: "Duarte Jorge",
    img: LinkedIn,
    link: "https://www.linkedin.com/in/duarte-jorge-1226022b4/",
  },
  {
    platform: "GitHub",
    username: "@duart23",
    img: GitHub,
    link: "https://github.com/duart23",
  },
];

const Socials = () => {
  return (
    <div id="socials" className="socials-container pt-3 d-flex">
      <div className="socials-left py-3 px-5">
        <h3 className="fw-bold">Socials</h3>
        <div className="socials-platforms mx-0 mt-3 d-flex">
          {socialsData.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.platform}
              className="card-link"
            >
              <div className="socials-card d-flex my-0 mx-1">
                <img src={item.img} alt={item.platform}/>
                <p className="my-auto px-4">{item.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="socials-contact position-relative p-3">
        <h3 className="fw-bold">Contact Me</h3>
        <p className="mb-0">+45 50109829</p>
        <a href="mailto:duarte.peixoto.jorge@gmail.com">duarte.peixoto.jorge@gmail.com</a>
      </div>
    </div>
  );
};

export default Socials;
