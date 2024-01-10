const express = require("express")
const router = express.Router()
const {getProducts, getTesting} = require("../controllers/products")

router.route("/").get(getProducts)
router.route("/test").get(getTesting)

module.exports = router