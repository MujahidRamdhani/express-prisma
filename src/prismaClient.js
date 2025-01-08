const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Test connection function
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Export prisma client and test connection function
module.exports = { prisma, testConnection };
