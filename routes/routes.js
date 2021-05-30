const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/me', controller.me);
router.get('/coding', controller.coding);
router.get('/youtube', controller.youtube);
router.get('/impressum', controller.imprint);
router.get('/datenschutz', controller.privacy);

module.exports = router;