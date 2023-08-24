const express = require("express");
const router = express.Router();
const navbar = require("../components/navbar");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    navbar: navbar("/"),
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    navbar: navbar("/about"),
  });
});

module.exports = router;
