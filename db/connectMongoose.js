const mongoose = require("mongoose");

const logger = require("../logger");

const DB_URL = process.env.MONGO_DB_URL;

async function connectMongoose() {
  try {
    await mongoose.connect(DB_URL);
    logger.info("Successfully connected to database.");
  } catch (error) {
    logger.error("Failed to connect to database.", error);
    process.exit(1);
  }
}

module.exports = connectMongoose;
