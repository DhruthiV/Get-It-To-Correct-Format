import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OtherSections from "./ContentForm/OtherSections";
import Syllabus from "./ContentForm/Syllabus";
import SubmitForm from "./ContentForm/SubmitForm";
import Header from "./Header/Header";

function App() {
  const [courseData, setCourseData] = useState({
    courseCode: "",
    courseTitle: "",
    credits: "",
    objectives: [],
    outcomes: [],
    overview: "",
    textbooks: [],
    references: [],
  });

  const [syllabusData, setSyllabusData] = useState({
    unit1: "",
    unit1EL: "",
    unit2: "",
    unit2EL: "",
    unit3: "",
    unit3EL: "",
    unit4: "",
    unit4EL: "",
  });

  const handleCourseDataSubmit = (data) => {
    setCourseData(data);
  };

  const handleSyllabusDataSubmit = (data) => {
    setSyllabusData(data);
  };

 
  return (
    <>
    <Header />
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
    <div className="mt-3 mb-3 w-75">
        <OtherSections onSubmit={handleCourseDataSubmit} />
    
      </div>
      <div className="mb-3 w-75">
        <Syllabus onSubmit={handleSyllabusDataSubmit} />
      </div>
      <div className="m-5 w-75">
      <SubmitForm courseData={courseData} syllabusData={syllabusData} />
      </div>
    </div>
    </>
  );
}

export default App;
