import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RaiseIssuePage.css";
import TraineeNavigationBar from "./TraineeNavigationBar";
import FooterBar from "./FooterBar";

function RaiseIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [faqs, setFaqs] = useState([
    {
      question: "How can I download my offer letter?",
      answer:
        'You can download your offer letter by clicking on the "Download Offer Letter" tab in the navigation bar.',
    },
    {
      question: "Where can I see the instructions?",
      answer:
        "You can see instructions by clicking on the Guidelines tab in the navigation bar.",
    },
    {
      question: "What should I do if I encounter a bug?",
      answer:
        'You can report a bug by filling out the "Raise an Issue" form above on this page.',
    },
  ]);
  const [expandedFaqs, setExpandedFaqs] = useState(
    Array(faqs.length).fill(false)
  );

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleToggleFaq = (index) => {
    const newExpandedFaqs = [...expandedFaqs];
    newExpandedFaqs[index] = !newExpandedFaqs[index];
    setExpandedFaqs(newExpandedFaqs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the title and description
    // For example, send it to a server using an API call
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <TraineeNavigationBar></TraineeNavigationBar>
      <div className="raise-issue-container">
        <h1 className="raise-issue-title">Raise an Issue</h1>
        <center>
          <form onSubmit={handleSubmit} style={{backgroundColor:"silver"}}>
            <div className="form-group">
              <label htmlFor="title">
                <h3>Title:</h3>
              </label>{" "}
              &nbsp;&nbsp;&nbsp;
              <input
                id="title"
                className="form-control"
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">
                <h3>Description:</h3>
              </label>
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </center>
        <h2 className="faq-title">FAQ's</h2>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <button
                onClick={() => handleToggleFaq(index)}
                className="faq-question"
              >
                {faq.question}
              </button>
              {expandedFaqs[index] && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>{" "}
        <br></br> <br></br> <br></br>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default RaiseIssue;
