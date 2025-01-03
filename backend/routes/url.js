const { Router } = require("express");
const {
    addURLHandler,
    getAllUrls,
    deleteUrlHandler,
} = require("../controllers/url");
const checkAuth = require("../middlewares/auth");

const router = Router();

router.use(checkAuth);

router.post("/add", addURLHandler);
router.get("/get", getAllUrls);
router.get("/delete/:id", deleteUrlHandler);

module.exports = router;
