const path = require('path')
const express = require('express')

const app = express()

const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/server', (req, res) => {
  res.status(200).json({yes: 'HELLOOOOO'})
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
