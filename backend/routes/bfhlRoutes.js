const express = require('express');
const { getBfhl, postBfhl } = require('../controllers/bfhlController');
const router = express.Router();

router.route('/').get(getBfhl).post(postBfhl);

module.exports = router;
