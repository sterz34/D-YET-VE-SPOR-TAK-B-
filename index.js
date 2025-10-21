const express = require('express');
const meals = require('./routes/meals');
const exercises = require('./routes/exercises');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Diyet ve Spor Takibi API - hello' }));
app.use('/meals', meals);
app.use('/exercises', exercises);

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on ${port}`));
}

module.exports = app;
