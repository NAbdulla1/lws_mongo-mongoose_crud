require("dotenv").config();
const express = require("express");

const logger = require("./logger");
const connectMongoose = require("./db/connectMongoose");
const router = require("./routes");

app = express();

connectMongoose();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  logger.info(`server is listening on 3000`);
});
