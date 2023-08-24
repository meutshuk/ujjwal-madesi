const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Use ejs as our view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
