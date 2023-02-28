const contactService = require("../services/contactServices");
 
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.json({ data: contacts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createContact = async (req, res) => {
  try {
    const contact = await contactService.createContact(req.body);
    res.json({ data: contact, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    res.json({ data: contact, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateContact = async (req, res) => {
  try {
    const contact = await contactService.updateContact(req.params.id, req.body);
    res.json({ data: contact, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteContact = async (req, res) => {
  try {
    const contact = await contactService.deleteContact(req.params.id);
    res.json({ data: contact, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



