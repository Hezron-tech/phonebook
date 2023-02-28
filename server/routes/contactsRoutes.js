const express = require("express");
const {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/BlogController");
 

const router = express.Router();
router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);
 
module.exports = router;