const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// Create a new report
router.post('/create-report', async (req, res) => {
  const { userId, reportType, startDate, endDate } = req.body;
  try {
    const newReport = new Report({ userId, reportType, startDate, endDate });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all reports (can be filtered later)
router.get('/reports', async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a report
router.put('/update-report/:id', async (req, res) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedReport);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a report
router.delete('/delete-report/:id', async (req, res) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.status(200).send('Report deleted successfully');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
