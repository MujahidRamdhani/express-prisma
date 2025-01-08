const express = require('express');
const router = express.Router();
const {prisma, testConnection} = require('./prismaClient');  // Import the prisma client

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();  // Fetch all users from MySQL
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection error' });
  }
});

router.get('/connect', async (req, res) => {
  try {
    const result = await  testConnection(); // Fetch all users from MySQL
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection error' });
  }
});


// Create a user
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

module.exports = router;
