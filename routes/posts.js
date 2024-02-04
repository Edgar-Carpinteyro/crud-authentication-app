const express = require("express");
import prisma from "../db";
// const prisma = require("prisma");
const checkIfAuthenticated = require("checkIfAuthenticated");

const router = express.Router();

router.post("/create-post", checkIfAuthenticated, async (req, res) => {

    try {
        const { title, content } = req.body;
        const userId = req.user.id;

        // Create a new post associated with the userId
    await prisma.post.create({
        data: {
          title,
          content,
          userId,
        },
      });
    
      res.redirect("/dashboard");

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" })

    }
})