const mongoose= require('mongoose');

const contactSchema= new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    }
});

mongoose.model('contacts', contactSchema);