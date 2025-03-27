import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reports')
      .then(res => setReports(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Task Reports</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Report Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Completed Tasks</th>
            <th>Productivity Score</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report.userId}</td>
              <td>{report.reportType}</td>
              <td>{new Date(report.startDate).toLocaleDateString()}</td>
              <td>{new Date(report.endDate).toLocaleDateString()}</td>
              <td>{report.completedTasks}</td>
              <td>{report.productivityScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
