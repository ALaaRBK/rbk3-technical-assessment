var db = require('../models/Job')

// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var job =new db( job )
  job.save( callback() );
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
    db.find({ salary : { $gt: 50.000 }},callback());

};
