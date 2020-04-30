require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// ... Your code here

const studentsList = require('./exam-info');

// in the home,list all the students who took the exam
app.get('/', (req, res) => {
  res.render('full-list', { studentsList });
});

// in the '/results' list all the students who passed the test and their score.
// Also, students who passed should be on the top.

app.get('/results', (req, res) => {
  const passed = studentsList.filter(student => student.hasPassed);
  const sorted = [...passed].sort((a, b) => (a.score < b.score ? 1 : -1));

  res.render('results', { sorted });
});

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
