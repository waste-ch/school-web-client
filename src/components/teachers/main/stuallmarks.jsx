import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Fa1 from './allexamresults.jsx/fa1results';


class StudentMarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFormat: '',
      redirectToPage: false,
    };
  }

  handleFormatChange = (event) => {
    const selectedFormat = event.target.value;
    this.setState({ selectedFormat, redirectToPage: true });
  }

  render() {
    const examFormats = ['FA1', 'FA2', 'Half Yearly', 'FA3', 'FA4', 'Final Exams'];

    if (this.state.redirectToPage) {
      return <Navigate to={`/${this.state.selectedFormat.toLowerCase()}`} />;
    }

    return (
      <div>
        <label>Select Exam Format: </label>
        <select value={this.state.selectedFormat} onChange={this.handleFormatChange}>
          <option value="">Select...</option>
          {examFormats.map((format, index) => (
            <option key={index} value={format}>{format}</option>
          ))}
        </select>
       
          <Routes>
            <Route path="/Fa1" element={<Fa1/>} />
            {/* Add routes for other exam formats */}
          </Routes>
       
      </div>
    );
  }
}

export default StudentMarks;
