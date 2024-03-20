const mongoose = require('mongoose');
const resolvedIssueSchema = new mongoose.Schema({
  coordinatorEmail: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  changeType: {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  resolvedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ResolvedIssue', resolvedIssueSchema);