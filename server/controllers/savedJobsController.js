/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const savedJobModels = require('../models/savedJobModel');
const employerModel = require('../models/employerModel');
const jobPostModel = require('../models/jobPostModel');

exports.saveJob = async (req, res) => {
  const {
    salary_min,
    locations,
    salary_type,
    date,
    description,
    salary_currency_code,
    salary,
    site,
    url,
    title,
    salary_max,
    company,
    employmentType,
    experienceLevel,
    worksite,
    session_id,
    interest_level,
  } = req.body;

  await employerModel.insertEmployer({ name: company })
    .then((data) => {
      req.body.employer_id = data.rows[0].id;
    })
    .catch((err) => console.log(err));

  let job_post_id;
  await jobPostModel.insertJobPost(req.body)
    .then((data) => { job_post_id = data.rows[0].id; })
    .catch((err) => console.log(err));
  debugger;
  savedJobModels.saveJob(req.user.id, interest_level, job_post_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getSavedJobs = (req, res) => {
  savedJobModels.getSavedJobs(req.body.session_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
