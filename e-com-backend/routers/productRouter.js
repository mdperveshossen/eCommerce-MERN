const router = require('express').Router();
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');
const {createProduct, getProduct, getProductById, updateProductById } = require("../controllers/productController");


router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProduct);



router.route('/:id')
    .get(getProductById)
    .put(updateProductById);


module.exports = router;