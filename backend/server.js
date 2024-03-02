const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({"message": "hello from express"})
})

app.listen(8080, () => {
  console.log("on port 8080")
})
