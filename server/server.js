const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const students = require('./routes/student.router.js');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('build'));

app.use('/students', students);

app.listen(PORT, () =>
{
  console.log("server.js listenting on port: ", PORT);
})
