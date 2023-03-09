import React from "react";
import { useNavigate } from "react-router-dom";
import Slideshow from "../Data/Slideshow";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <div className="home-page">
        <img
          style={{ width: "100%", height: "500px" }}
          src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="home"
        />

        <p
          style={{
            cursor: "pointer",
            fontSize: "2em",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            marginTop: "50px",
          }}
        >
          {" "}
          <b>Our Product Farming</b>
        </p>
        <p style={{ width: "90%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore
          id laboriosam, autem similique voluptates enim laudantium odit
          incidunt illo, ipsam, vitae culpa. Ad velit optio odit sit dignissimos
          minima.Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore possimus iusto minima, omnis totam esse temporibus suscipit
          tempore reiciendis non, quam iste fugit consequatur? At, sed velit.
          Autem, fuga cum?
        </p>
        <Slideshow></Slideshow>

        <p
          onClick={() => {
            navigate("/products/");
          }}
          style={{
            cursor: "pointer",
            fontSize: "2em",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          {" "}
          <b>Why OrgaNickel ?</b>
        </p>
        <div className="section-2">
          <div className="section-2-description">
            <h1>
              <b>{`Our Earth <=> Us`}</b>
            </h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              culpa alias saepe, esse iste harum quo maiores natus asperiores,
              architecto assumenda minus nam eum? Voluptatum quis aliquam
              perspiciatis sint praesentium. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Cumque nisi magnam dolores
              doloremque nemo saepe quo placeat nam modi fugit incidunt esse
              rerum quae quibusdam, ab adipisci est aliquam molestias.
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi nostrum ea, rem necessitatibus quia numquam ullam,
                deleniti voluptatem accusantium ad molestiae neque! Ratione, ea
                esse dicta doloremque modi quasi molestiae! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Commodi necessitatibus
                nobis non. Inventore exercitationem quas eaque non et quasi
                optio libero? Nam adipisci alias voluptate quas reiciendis
                incidunt ducimus temporibus!
              </div>
            </div>
          </div>
          <div className="section-2-image-div">
            <img
              className="section-2-image"
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2813&q=80"
              alt="Why OrgaNickel"
            />
          </div>
        </div>
        <div className="contact">
          <p
            style={{
              cursor: "pointer",
              fontSize: "2em",
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
              marginTop: "50px",
            }}
          >
            {" "}
            <b>Contact Us</b>
          </p>
          <div>
            <AiOutlineMail size="1.4em" className="icon" />:
            hello@organickel.com
          </div>
          <div>
            <AiOutlinePhone size="1.4em" className="icon" /> : 0767-054-7575
          </div>
        </div>
      </div>
    </div>
  );
}
