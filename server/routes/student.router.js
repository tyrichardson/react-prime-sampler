const express = require('express');
const superagent = require('superagent');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET STUDENTS
router.get('/', (req, res) =>
{
  console.log('regular get from router');
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

//POST NEW STUDENTS
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
    setTimeout(() =>
    {
      getAvatarUrl(newStudent);
    }, 1000);
});

//GET AVATAR_URL FROM GITHUB WHEN NEW STUDENT IS POSTED
getAvatarUrl = (newStudent) =>
{
  let avatar_url = "";
  superagent
    .get(`https://api.github.com/users/${ newStudent }?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`)
    .set({ 'User-Agent': `${ newStudent }` })
    .then(res =>
    {
      avatar_url = res.body.avatar_url;

      console.log('superagent get ', avatar_url);

      const sqlText = 'UPDATE students SET avatar_url=$1 WHERE github_name=$2;';

      pool.query(sqlText, [avatar_url, newStudent])
      .then((res) =>
      {
        console.log('put avatar_url request from router ', avatar_url, newStudent);
      })
      .catch((err) =>
      {
        console.log('error with avatar_url put on router ', err);
        res.sendStatus(500);
      })
    })
    .catch(err =>
    {
      console.log('superagent get err ', err)
    });
}

//GET PHOTO AVATAR_URL
router.get('/photo', (req, res) =>
{
  const name = req.query.name;

  console.log('photo get from router ', name);

  const sqlText = 'SELECT avatar_url FROM students WHERE github_name=$1;';

  pool.query(sqlText, [name])
   .then((result) =>
    {
      res.send(result.rows);
    })
    .catch((error) =>
    {
      console.log(`Error with domPhoto get db query (student.router.js) ${sqlText} `, error);
      res.sendStatus(500);
    });
});


//DELETE STUDENTS
router.delete('/', (req, res) =>
{
  const id = req.body.id;
  const sqlText = 'DELETE FROM students WHERE id=$1';
  pool.query(sqlText, [id])
    .then((result) =>
    {
      res.sendStatus(200);
    })
    .catch((err) =>
    {
      console.log('error making delete ', err);
      res.sendStatus(500);
    })
})

module.exports = router;
