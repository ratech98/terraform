const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("../config/db");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5050;
connectDB();
const { createServer } = require("http");



const server = createServer(app);

app.use(bodyParser.json());

app.use((req, res, next) => {

  next();
});

app.use(cors({ origin: '*' }));
app.use(express.json());





app.get("/", (req, res) => {
  res.send("server up!");
});



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
