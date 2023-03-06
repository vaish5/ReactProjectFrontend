import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TraineeDetailsPage from "./TraineeDetailsPage";
import "./MentorHomePage.css";
import FooterBar from "./FooterBar";

function MentorHomePage() {
  const [trainees, setTrainees] = useState([
    { id: 1, name: "Navya", age: 22, gender: "female" },
    { id: 2, name: "Akshara", age: 25, gender: "female" },
    { id: 3, name: "Kabir", age: 20, gender: "male" },
    { id: 4, name: "David", age: 24, gender: "male" },
    { id: 5, name: "Saanvi", age: 23, gender: "female" },
    { id: 6, name: "Rahul", age: 21, gender: "male" },
    { id: 7, name: "Deepthi", age: 22, gender: "female" },
    { id: 8, name: "Ajay", age: 26, gender: "male" },
    { id: 9, name: "Priya", age: 20, gender: "female" },
    { id: 10, name: "Ravi", age: 23, gender: "male" },
    { id: 11, name: "Katherine", age: 21, gender: "female" },
    { id: 12, name: "Vijay", age: 25, gender: "male" },
    { id: 13, name: "Maggie", age: 22, gender: "female" },
    { id: 14, name: "Karthik", age: 24, gender: "male" },
    { id: 15, name: "Leela", age: 23, gender: "female" },
    { id: 16, name: "Akhil", age: 20, gender: "male" },
    { id: 17, name: "Alekhya", age: 26, gender: "female" },
    { id: 18, name: "Teja", age: 21, gender: "male" },
    { id: 19, name: "Radha", age: 25, gender: "female" },
    { id: 20, name: "Nikhil", age: 22, gender: "male" },
    { id: 21, name: "Uma", age: 24, gender: "female" },
    { id: 22, name: "Dhoni", age: 23, gender: "male" },
    { id: 23, name: "Latha", age: 20, gender: "female" },
    { id: 24, name: "Mahesh", age: 26, gender: "male" },
    { id: 25, name: "Jasmine", age: 21, gender: "female" },
    { id: 26, name: "Arjun", age: 25, gender: "male" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [traineesPerPage] = useState(10);
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const navigate = useNavigate(); // get the history object from react-router-dom

  const indexOfLastTrainee = currentPage * traineesPerPage;
  const indexOfFirstTrainee = indexOfLastTrainee - traineesPerPage;
  const currentTrainees = trainees.slice(
    indexOfFirstTrainee,
    indexOfLastTrainee
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(trainees.length / traineesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleTraineeClick = (id) => {
    const selected = trainees.find((trainee) => trainee.id === id);
    setSelectedTrainee(selected);
    // navigate to TraineeDetailsPage
    navigate.push(`/trainee/${id}`);
  };

  return (
    <div>
      {" "}
      <br></br>
      <br></br>
      <div
        className="mentor-homepage-container"
        style={{ backgroundColor: "#CBC3E3" }}
      >
        <Link to="/">
          <button type="submit">Logout</button>
        </Link>
        <h1 className="mentor-homepage-heading">Trainees Info</h1>
        <div className="trainees-container">
          {currentTrainees.map((trainee) => (
            <div
              key={trainee.id}
              className="trainee-item"
              onClick={() => handleTraineeClick(trainee.id)}
            >
              {trainee.name}
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button className="page-link" id={number} onClick={handleClick}>
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <center>{selectedTrainee && <TraineeDetailsPage trainee={selectedTrainee} />}</center>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default MentorHomePage;
