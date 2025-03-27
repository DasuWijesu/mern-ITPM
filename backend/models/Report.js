const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  reportType: { type: String, enum: ['weekly', 'monthly', 'custom'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  completedTasks: { type: Number, default: 0 },
  pendingTasks: { type: Number, default: 0 },
  overdueTasks: { type: Number, default: 0 },
  productivityScore: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', ReportSchema);
