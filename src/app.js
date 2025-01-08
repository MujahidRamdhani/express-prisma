const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
