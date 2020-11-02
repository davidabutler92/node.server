const express = require('express'); // how we import in node
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
 
app.use(cors());

app.get('/pet', (req, res) => {
  console.log(new Date());
  res.json([
    {
      pet: 'Great Dane',
    },
    {
      name: 'Snowy',
    },
    {
      weight: '100lbs',
    },
  ]);
});

app.get('/user', (req, res) => {
  res.json([
    {
      fisrtName: 'David',
    },
    {
      lastName: 'Butler',
    },
    {
      age: 28,
    },
    {
      height: '6 foot 2 inches',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
