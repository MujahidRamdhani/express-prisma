const express = require('express');
const { PrismaClient } = require('@prisma/client');
const routes = require('./routes');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => res.send('Express + Prisma App is running!'));

module.exports = { app, prisma };
