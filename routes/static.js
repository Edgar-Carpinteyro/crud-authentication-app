const express = require("express");
import prisma from "../db";
// const prisma = require("prisma");
const checkIfAuthenticated = require("checkIfAuthenticated");

const router = express.Router();



// app.set('view engine', 'ejs'); 

router.get('/', async (req, res) => {

//   res.render('index.ejs');
});

router.get("/login", async (req, res) => {

    // res.render("login.ejs");
});

router.get("/signup", async (req, res) => {

    // res.render("signup.ejs");
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

    // res.render("signup.ejs");
});

module.exports = { router };


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});