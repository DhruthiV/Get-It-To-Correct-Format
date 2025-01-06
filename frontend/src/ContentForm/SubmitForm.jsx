import React, { useState } from 'react';
import axios from 'axios';
import { Button, Alert } from 'react-bootstrap';
import "../App.css";

const SubmitForm = ({ courseData, syllabusData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For error handling

  const handleSubmit = async () => {
    setLoading(true);
    setError(null); // Reset error state before submitting

    // Validate course data
    if (!courseData || !courseData.courseCode || !courseData.courseTitle) {
      setError('Course Code and Title are required!');
      setLoading(false);
      return;
    }

    // Validate syllabus data
    const syllabusValid = Object.keys(syllabusData).every(
      key => syllabusData[key].trim() !== ''
    );

    if (!syllabusValid) {
      setError('All syllabus fields must be filled!');
      setLoading(false);
      return;
    }

    // Combine data from both forms
    const formData = {
      courseCode: courseData.courseCode,
      courseTitle: courseData.courseTitle,
      credits: courseData.credits,
      objectives: courseData.objectives,
      outcomes: courseData.outcomes,
      overview: courseData.overview,
      syllabus: Object.keys(syllabusData).map((unitKey, index) => ({
        title: `Unit ${index + 1}: ${unitKey.replace(/([A-Z])/g, ' $1')}`,
        description: syllabusData[unitKey],
        experiential_learning: syllabusData[`${unitKey}EL`] || '',
      })),
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
      link.setAttribute('download', `${courseData.courseCode.toUpperCase()}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      setError('Error generating PDF. Please try again later.');
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-4">
      {error && <Alert variant="danger">{error}</Alert>} {/* Display error if any */}
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generating PDF...' : 'Generate PDF'}
      </Button>
    </div>
  );
};

export default SubmitForm;
