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

  const [syllabusData, setSyllabusData] = useState([
    {
      title: "Java Fundamentals",
      description: "Object-Oriented Programming, JDK, Data types, Operators, Program control statements - if, switch, for, while. Classes, Objects and Methods, Myths and Facts about Java classes and objects, Constructors, Static and Heap memory, new keyword, Garbage Collection and finalizers, this keyword, Arrays and jagged arrays, Array References, length Member, for loops, for-each, Strings, Command-Line Arguments, Method Overloading, Overloading Constructors, Nested Classes.",
      experientialLearning: "Problem solving with data types, Loops, Arrays, Garbage Collection, Polymorphism.",
      hours: "16 + 6 Hours"
    },
    {
      title: "Inheritance and Multithreading",
      description: "Inheritance, Member Access, Constructors, Method Overriding, Abstract Classes, Exception Handling, Interfaces and Packages, Multithreaded Programming, Thread Communication Using notify(), wait() and notifyAll(), String Handling, Enumeration and Annotations, Wrappers Class.",
      experientialLearning: "Problem solving with Inheritance, Exception handling, Multi-threading, Annotations.",
      hours: "16 + 6 Hours"
    },
    {
      title: "JDBC and Servlets",
      description: "JDBC classes and interfaces, Talking to Database, Immediate Solution, Essential JDBC program, Using Prepared Statement Object, Interactive SQL Tool, types of JDBC, JDBC in Action - Result Sets, Batch updates, Mapping, Basic JDBC data types, Advanced JDBC datatypes, Immediate Solutions. Web Application Server, Server Architecture, Servlet Structure, Servlet Creation, Servlet's Lifecycle, Single Thread model interface, Handling Client Request: Form Data, Handling Client Request: HTTP Request Headers, Generating Server Response: HTTP Response Headers, Inter-Servlet communication, Handling Cookies, Session Tracking.",
      experientialLearning: "Problem solving JDBC, Problem solving using Servlets, Cookies and Sessions.",
      hours: "16 + 8 Hours"
    },
    {
      title: "JSP, Annotations, Frameworks",
      description: "Overview of JSP Technology, Need of JSP, Benefits of JSP, Advantages of JSP, Basic Syntax, Invoking Java Code with JSP Scripting Elements, Using JSP expressions, Using Scriplets, Declarations, Creating Packages, JAR files, Annotations, Annotation types, working with Java Bean, Frameworks - Hibernate, Struts, Spring.",
      experientialLearning: "Working with JSP scripting elements, annotations and creating JAR files.",
      hours: "12 + 4 Hours"
    }
  ]);

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
          <OtherSections
            onSubmit={handleCourseDataSubmit}
            prefilledData={{
              courseCode: "UQ22CA751A",
              courseTitle: "Java Enterprise Application Development",
              credits: "4-0-2-5-5",
              objectives: `Introduce the pure object-oriented concepts through Java programming.
Enable a detailed insight into the Java programming concepts such as Inheritance, Interfaces, Packages, Multithreaded Environment, String handling, and Enumerations.
Learn working with Database using Java and design Server-side applications.
Explore the features of developing Enterprise applications.`,
              outcomes: `Apply the object-oriented concepts through Java language.
Understand the concepts of inheritance and multi-threaded programming.
Learn Java Database connectivity and Server-side programming.
Apply the advanced Java concepts to build dynamic web applications using JSP.`,
              overview: `The course is designed to build a Java application using the concepts of core Java programming language and the advanced concepts of JDBC, Servlets, and JSP. 
It gives an insight into connecting various storage technologies, Server-side, and Client-side programming.
It gives an understanding of working with database connectivity, servlet programming, and also helps to learn to use frameworks for easy development of an Enterprise application.`,
              textbooks: `“Core Servlets and Java Server Pages”, Marty Hall and Larry Brown, Sun Microsystems Inc., 2nd Edition, 2020
“Java 8 Programming Black Book”, DreamTech Press, 2015`,
              references: `“Java Fundamentals– A Comprehensive Introduction”, Herbert Schildt and Dale Skrien, McGraw Hill, 1st Edition, 2013.
“The Complete Reference Java2”, Herbert Schildt, Tata McGraw Hill, 7th Edition, 2017.
“Core Java 2- Volume 1”, Cay S Horstmann, Gary Cornell, Pearson Education, 7th Edition, 2005`
            }}
          />
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
