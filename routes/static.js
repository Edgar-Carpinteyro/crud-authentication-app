const express = require("express");
const prisma = require("../db");
const {checkIfAuthenticated} = require("../middleware/authMiddleware.js");
const router = express.Router();

router.get("/", async (req, res) => {

    res.render("index.ejs", null);
});

router.get("/login", async (req, res) => {

    res.render("login.ejs", null);
});

router.get("/signup", async (req, res) => {

    res.render("signup.ejs", null);
});

router.get("/dashboard", checkIfAuthenticated, async (req, res) => {
    // Use the userId from Passport
  const userId = req.user.id;

  try {
    // Fetch user's posts from the database
    const userPosts = await prisma.post.findMany({
      where: {
        userId: userId,
      },
    });

    // Render the 'dashboard.ejs' file with userPosts data
    res.render("dashboard", { userPosts, error: false });
  } catch (error) {
    console.error(error);
    // Instead of just sending an error for the browser to handle,
		// we would display the dashboard page with an error message
    res.render("dashboard", { userPosts: null, error: true });
  }

});

router.get("/create-post", checkIfAuthenticated, async (req, res) => {

    res.render("signup.ejs");
});

module.exports = { router };
