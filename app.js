const express = require('express');
const bodyParser = require("body-parser");

const dbConnect = require('./util/database');
const apiRoutes = require('./routes/api-routes');
const Post = require('./models/post');


const app = express();
const port = 3000;

dbConnect().then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}).catch(err => console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




// cors origin solved
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, cache-control"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
})


app.use('/api', apiRoutes);