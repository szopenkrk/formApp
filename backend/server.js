import express from 'express';
import cors from 'cors';

const app = express()
const port = 3001;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());

app.use(cors(corsOptions));

app.get('/status', (req, res) => {
  res.send('Server is workign good')
})

app.post('/users', function(req, res) {
  var firstName = req.param('firstName');
  var userName = req.param('userName');
  var password = req.param('password');
  var repeat = req.param('repeat');
  var email = req.param('email');

  console.log('User request', firstName, userName, password);
  res.send(firstName + ' ' + userName + ' ' + password+ ' ' + repeat+ ' ' + email);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})