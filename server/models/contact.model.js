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
},
{ timestamps: true }
);
contactSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

var Contacts=mongoose.model('contacts', contactSchema);
module.exports=Contacts;

