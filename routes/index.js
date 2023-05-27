const { Router } = require("express");
const apiRouter = require("./api");

const router = new Router();

router.route("/")
  .get((req, res) => {
    res.send("Hello world from '/'.");
  });

router.use("/api", apiRouter);

module.exports = router;
