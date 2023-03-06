// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import GuidelinesPage from "./components/GuidelinesPage";
import DownloadOfferLetterPage from "./components/DownloadOfferLetterPage";
import ViewCoursesPage from "./components/ViewCoursesPage";
import TasksPage from "./components/TasksPage";
import RaiseIssuePage from "./components/RaiseIssuePage";
import UploadDocumentsPage from "./components/UploadDocumentsPage";
import TraineeSignInPage from "./components/TraineeSignInPage";
import MentorSignInPage from "./components/MentorSignInPage";
import MentorHomePage from "./components/MentorHomePage";
import TraineeDetailsPage from "./components/TraineeDetailsPage";
import MentorRegisterPage from "./components/MentorRegisterPage";
import TraineeRegisterPage from "./components/TraineeRegisterPage";
import TraineeNavigationBar from "./components/TraineeNavigationBar";
import FooterBar from "./components/FooterBar";
import "./App.css";

function App() {
  return (
    // // <Router>
    // <div className="app-background">
    //   {/* <h2>Let's get started!</h2> */}
    //   <RegisterPage></RegisterPage>
    //   {/* <SignInPage></SignInPage> */}
    //   {/* <HomePage></HomePage> */}
    // </div>
    // // </Router>

    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route
          path="/download-offer-letter"
          element={<DownloadOfferLetterPage />}
        />
        <Route path="/view-courses" element={<ViewCoursesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/raise-issue" element={<RaiseIssuePage />} />
        <Route path="/upload-documents" element={<UploadDocumentsPage />} />
        <Route path="/trainee-sign-in-page" element={<TraineeSignInPage />} />
        <Route path="/mentor-sign-in-page" element={<MentorSignInPage />} />
        <Route path="/mentor-home-page" element={<MentorHomePage />} />
        <Route path="/trainee-details-page" element={<TraineeDetailsPage />} />
        <Route path="/mentor-register-page" element={<MentorRegisterPage />} />
        <Route path="/trainee-register-page" element={<TraineeRegisterPage />} />
        <Route path="/trainee-navigation-bar" element={<TraineeNavigationBar />} />
        <Route path="/footer-bar" element={<FooterBar />} />
      </Routes>
    </Router>
  );
}

export default App;
