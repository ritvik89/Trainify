const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim: true
    },

    contact: {
        type: String,
        required: true,
        trim: true
    },

    location: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required:true
    },

    isActive: {
        type: Boolean,
        default: true    // optional: new users will be active by default
    },

    Date: {
        type: Date,
        default: Date.now
    },

    
});


module.exports = mongoose.model('User', userSchema);