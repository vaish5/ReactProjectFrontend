import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import TraineeNavigationBar from "./TraineeNavigationBar";
import FooterBar from "./FooterBar";

// import React from 'react';

const ViewCourses = () => {
  const coursesData = [
    { title: "Course 1", progress: 30, lastDate: "17/02/2023" },
    { title: "Course 2", progress: 60, lastDate: "20/02/2023" },
    { title: "Course 3", progress: 100, lastDate: "15/02/2023" },
    { title: "Course 4", progress: 10, lastDate: "22/02/2023" },
    { title: "Course 5", progress: 75, lastDate: "25/02/2023" },
    { title: "Course 6", progress: 20, lastDate: "28/02/2023" },
    { title: "Course 7", progress: 40, lastDate: "01/03/2023" },
    { title: "Course 8", progress: 90, lastDate: "05/03/2023" },
    { title: "Course 9", progress: 50, lastDate: "10/03/2023" },
    { title: "Course 10", progress: 80, lastDate: "15/03/2023" },
  ];

  const newCoursesCount = coursesData.filter(
    (course) => course.progress === 0
  ).length;
  const inProgressCoursesCount = coursesData.filter(
    (course) => course.progress > 0 && course.progress < 100
  ).length;
  const completedCoursesCount = coursesData.filter(
    (course) => course.progress === 100
  ).length;
  const overdueCoursesCount = coursesData.filter(
    (course) => course.progress < 100 && new Date(course.lastDate) < new Date()
  ).length;

  return (
    <div>
      <TraineeNavigationBar></TraineeNavigationBar>

      <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          &nbsp;&nbsp;&nbsp;
          <div style={{ width: "25%", textAlign: "center" }}>
            <div>
              <div style={{ color: "black" }}>New/(Not Started)</div>
              <div style={{ color: "black" }}>{newCoursesCount} courses</div>
            </div>
            <div style={{ height: "60px", marginTop: "5px" }}>
              <div style={{ height: "20px", backgroundColor: "#d6d6d6" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${(newCoursesCount / coursesData.length) * 100}%`,
                    backgroundColor: "#37b24d",
                  }}
                />
              </div>
            </div>
          </div>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ width: "25%", textAlign: "center" }}>
            <div>
              <div style={{ color: "black" }}>In-Progress</div>
              <div style={{ color: "black" }}>
                {inProgressCoursesCount} courses
              </div>
            </div>
            <div style={{ height: "60px", marginTop: "5px" }}>
              <div style={{ height: "20px", backgroundColor: "#d6d6d6" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${
                      (inProgressCoursesCount / coursesData.length) * 100
                    }%`,
                    backgroundColor: "#228be6",
                  }}
                />
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ width: "25%", textAlign: "center" }}>
            <div>
              <div style={{ color: "black" }}>Completed</div>
              <div style={{ color: "black" }}>
                {completedCoursesCount} courses
              </div>
            </div>
            <div style={{ height: "60px", marginTop: "5px" }}>
              <div style={{ height: "20px", backgroundColor: "#d6d6d6" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${
                      (completedCoursesCount / coursesData.length) * 100
                    }%`,
                    backgroundColor: "#fab005",
                  }}
                />
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ width: "25%", textAlign: "center" }}>
            <div>
              <div style={{ color: "black" }}>Overdue</div>
              <div style={{ color: "black" }}>
                {overdueCoursesCount} courses
              </div>
            </div>
            <div style={{ height: "60px", marginTop: "5px" }}>
              <div style={{ height: "20px", backgroundColor: "#d6d6d6" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${
                      (overdueCoursesCount / coursesData.length) * 100
                    }%`,
                    backgroundColor: "#f03e3e",
                  }}
                />
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {coursesData.map((course) => (
            <div key={course.title} style={{ width: "20%", margin: "2%" }}>
              <div
                style={{
                  backgroundColor: "#CBC3E3", //light purple color
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                  {course.title}
                </div>
                <div
                  style={{
                    height: "10px",
                    backgroundColor: "#d6d6d6",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${course.progress}%`,
                      backgroundColor: "#228be6",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div style={{ fontSize: "12px", marginTop: "5px" }}>
                  Last Date: {course.lastDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
};

export default ViewCourses;
