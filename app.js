const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const date1 = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(date1);
});

app.listen(3000);

module.exports = app;
