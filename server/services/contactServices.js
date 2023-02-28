const contactsModel= require('../models/contact.model')
 
exports.getAllContacts = async () => {
  return await contactsModel.find();
};
 
exports.createContact = async (contact) => {
  return await contactsModel.create(contact);
};
exports.getContactById = async (id) => {
  return await contactsModel.findById(id);
};
 
exports.updateContact = async (id, contact) => {
  return await contactsModel.findByIdAndUpdate(id, contact);
};
 
exports.deleteContact = async (id) => {
  return await contactsModel.findByIdAndDelete(id);
};