const express = require("express");

const app = express();

// Importing the Routes
const indexRoute = require("./routers/index-rotue");

app.get("/", indexRoute);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
