
const express = require('express');
const { handleIvr, handleGather } = require('../controllers/ivrController');

const router = express.Router();

router.post('/ivr', handleIvr);
router.post('/gather', handleGather);

module.exports = router;
