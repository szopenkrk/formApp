import express from 'express';

const app = express()
const port = 3001

app.get('/status', (req, res) => {
  res.send('Server is workign good')
})

app.post('/user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.send('user endpoint')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})