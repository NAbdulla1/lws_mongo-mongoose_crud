const { Router } = require("express");
const apiRouter = require("./api");

const router = new Router();

router.route("/")
  .get((req, res) => {
    res.send("Hello world from '/'.");
  });

router.use("/api", apiRouter);

router.all("*", (req, res) => {
  res.status(404).json();
})

module.exports = router;
