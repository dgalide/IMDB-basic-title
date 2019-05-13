const express = require('express');
const router = express.Router();


const title_controller = require('../controller/title.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', title_controller.getAll);
router.get('/search', title_controller.getTitle);
router.put('/:id/update', title_controller.putTitle);

module.exports = router;