const express = require("express");
const router = express.Router();
const { getAll, create, update, remove } = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", getAll);
router.post("/", auth, role("admin"), create);
router.put("/:id", auth, role("admin"), update);
router.delete("/:id", auth, role("admin"), remove);

module.exports = router;
