const express = require('express');
const router = express.Router();

const { create, list, remove, photoById } = require('../controllers/photo');

router.post('/photos/create', create);
router.get('/photos', list);
router.delete("/photos/:photoId", remove);
router.param("photoId", photoById);

module.exports = router;
