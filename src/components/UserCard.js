import React from "react";
import img from "../assets/images/ksk.jpg";
import "./UserCard.css";

const userdata = [
  {
    name: "Kirthykaa K.S (Ksk)",
    city: "Tirunelveli",
    description: "Interest on Front-end-developing",
    skills: ["ReactJS", "Html", "CSS", "Front end development"],
  },
  //   {
  //     name: "sibi",
  //     city: "Tirunelveli",
  //     description: "Interest on Front-end-developing",
  //     skills: ["ReactJS", "Html", "CSS", "Front end development"],
  //   },
  //   {
  //     name: "sibi",
  //     city: "Tirunelveli",
  //     description: "Interest on Front-end-developing",
  //     skills: ["ReactJS", "Html", "CSS", "Front end development"],
  //   },
];

function User(props) {
  return (
    <div className="root">
      <div className="card-container">
        <span className="pro-online">ONLINE</span>
        <img src={img} alt="ksk" className="img" height="350" width="350" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="button">
          <button className="primary">Message</button>
        </div>
        <div className="skill">
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function UserCard() {
  return (
    // <User
    //   name="sibi"
    //   city="Tirunelveli"
    //   description="Interest on Front-end-developing"
    //   skills={["ReactJS", "Html", "CSS", "Front end development"]}
    // />
    <>
      {userdata.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
        />
      ))}
    </>
  );
}

export default UserCard;
