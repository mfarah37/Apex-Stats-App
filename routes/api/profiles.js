const express = require('express')
const router = express.Router()
const profilesCtrl = require('../../controllers/api/profiles')

router.get('/:gamertag', profilesCtrl.getProfile)

module.exports = router;