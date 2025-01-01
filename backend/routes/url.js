const { Router } = require("express");
const { addURLHandler} = require("../controllers/url");
const checkAuth = require("../middlewares/auth");

const router = Router();

router.use(checkAuth);

router.post("/add", addURLHandler);

module.exports = router;