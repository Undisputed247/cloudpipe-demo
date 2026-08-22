const express = require('express');
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from cloudpipe!');
});


  console.log(`App running on port ${port}`);
});
