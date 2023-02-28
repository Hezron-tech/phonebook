const express = require("express");
const router = express.Router();
const {
    
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
 


router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);
 
module.exports = router;