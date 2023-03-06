import React from "react";
// import "./HomePage.css";
import { Link } from "react-router-dom";
import TraineeNavigationBar from "./TraineeNavigationBar";
import FooterBar from "./FooterBar";

function Tasks() {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Navigation Bar */}
      <TraineeNavigationBar></TraineeNavigationBar>

      {/* Home Page Content */}
      <div className="home-page-content">
        {" "}
        <br></br>
        <h1>Tasks : </h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            bibendum turpis quis tellus porttitor, vel viverra orci varius.
          </li>
          <li>
            Etiam vestibulum nulla vestibulum accumsan tempus. Cras convallis
            nunc nec porta aliquam. Quisque eu velit a dui imperdiet ultrices
            vitae vitae tellus.
          </li>
          <li>
            Aliquam elementum elit quis justo viverra, et rutrum leo tempus.
            Integer sit amet dui faucibus, vulputate lorem nec, condimentum
            elit.
          </li>
          <li>Sed nec purus sagittis, lobortis sem vitae, condimentum nibh.</li>
          <li>
            Praesent sagittis dui ut odio maximus porta. Suspendisse ac leo vel
            ex vehicula mollis.
          </li>
          <li>
            Sed lobortis lacus in dolor blandit, ac dignissim mi consequat.
          </li>
          <li>
            Mauris et neque ut mauris mattis tincidunt. Morbi dapibus leo ut
            maximus vulputate.
          </li>
          <li>
            Integer nec metus pharetra, pretium nibh non, fringilla arcu.
            Phasellus tempor sem sit amet enim pellentesque, eu aliquam odio
            pulvinar.
          </li>
        </ul>{" "}
        <br></br>
        <br></br>
        <br></br>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default Tasks;
