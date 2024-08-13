const express = require("express")
const router = express.Router()

const projectController = require("../controller/projects.controller")

router.get("/", projectController.getAll);
router.get("/:name", projectController.getByName);
/* router.get("/:id", postsController.getById)
router.post("/", postsController.create)
router.put("/:id", postsController.update)
router.delete("/:id", postsController.delete) */

module.exports = router