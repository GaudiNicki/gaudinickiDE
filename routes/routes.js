const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/imprint', controller.imprint);
router.get('/privacy', controller.privacy);

module.exports = router;