const express = require('express')
const router = express.Router()
const {getAllContacts,createContact,updateContact,deleteContact} = require('../controller/controller')
router.route('/').get(getAllContacts).post(createContact).put(updateContact).delete(deleteContact)
    

module.exports = router