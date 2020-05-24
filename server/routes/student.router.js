const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET STUDENTS
router.get('/', (req, res) =>
{
  const sqlText = 'SELECT * FROM students';
  pool.query(sqlText)
    .then((result) =>
    {
      res.send(result.rows);
    })
    .catch((error) =>
    {
      console.log(`Error with GET db query (student.router.js) ${sqlText} `, error);
      res.sendStatus(500);
    });
});

//POST STUDENTS
router.post('/', (req, res) =>
{
  const newStudent = req.body.github_name;
  console.log('POST student.router newStudent ', newStudent);
  const sqlText = `INSERT INTO students (github_name) VALUES ($1)`;

  pool.query(sqlText, [newStudent])
    .then((result) =>
    {
      res.sendStatus(201);
    })
    .catch((error) =>
    {
      console.log(`Error with POST db query (student.router.js) ${sqlText} `, error);
      res.sendStatus(500);
    });
});

module.exports = router;
