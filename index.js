const express = require('express')
const app = express();
const port = 3000;
const Sequelize = require('sequelize');
const { restaurant, review } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurant.findAll({
        attributes: ['name', 'address', 'category']
    });
    res.json(restaurants);
});

app.get('/reviews', async (req, res) => {
  const reviews = await review.findAll({
      attributes: ['id', 'stars', 'title', 'review', 'res']
  });
  res.json(reviews);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
