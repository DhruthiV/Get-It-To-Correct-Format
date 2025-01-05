import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const SubmitForm = ({ courseData, syllabusData }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    // Combine data from both forms
    const formData = {
      courseCode: courseData.courseCode,
      courseTitle: courseData.courseTitle,
      credits: courseData.credits,
      objectives: courseData.objectives,
      outcomes: courseData.outcomes,
      overview: courseData.overview,
      syllabus: [
        {
          title: 'Unit 1: Java Fundamentals',
          description: syllabusData.unit1,
          experiential_learning: syllabusData.unit1EL
        },
        {
          title: 'Unit 2: Inheritance and Multithreading',
          description: syllabusData.unit2,
          experiential_learning: syllabusData.unit2EL
        },
        {
          title: 'Unit 3: JDBC and Servlets',
          description: syllabusData.unit3,
          experiential_learning: syllabusData.unit3EL
        },
        {
          title: 'Unit 4: JSP, Annotations, Frameworks',
          description: syllabusData.unit4,
          experiential_learning: syllabusData.unit4EL
        }
      ],
      textbooks: courseData.textbooks,
      references: courseData.references,
    };

    try {
      const response = await axios.post('http://localhost:5000/generate-pdf', formData, {
        responseType: 'blob', // Important for downloading files
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'course_syllabus.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-4">
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generating PDF...' : 'Generate PDF'}
      </Button>
    </div>
  );
};

export default SubmitForm;
