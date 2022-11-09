const express = require('express');
const path = require('path');

// const db = require('./database');
const routes = require('./routes/routes');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is linening on port ${port}`));