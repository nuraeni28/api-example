const express = require('express');
const routes = require('./src/routes/index.routes.js');
const app = express();
const port =  3000;

app.get('/', (req, res) => res.status(200).json({
    message: 'Welcome to Example API ',
  }));  

app.use(express.json());
app.use('/api/', routes);
app.listen(3000)



