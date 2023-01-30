import mongoose from "mongoose";

const schemaUser = {

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        required: true,
    },
    
    uniqueString: {
        type: String
    },

    isValid: {
        type: Boolean
    },

    classOne:{
        type: mongoose.Types.ObjectId
    },
    classTwo:{
        type: mongoose.Types.ObjectId
    }

}

module.exports = schemaUser;
export {};