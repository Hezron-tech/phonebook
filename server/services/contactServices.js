const contactsModel= require('../models/contact.model')
 
exports.getAllContacts = async () => {
  return await contactsModel.find();
};
 
exports.createContact = async (blog) => {
  return await contactsModel.create(blog);
};
exports.getContactById = async (id) => {
  return await contactsModel.findById(id);
};
 
exports.updateContact = async (id, blog) => {
  return await contactsModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteContact = async (id) => {
  return await contactsModel.findByIdAndDelete(id);
};