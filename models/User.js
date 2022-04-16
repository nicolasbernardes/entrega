const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/facebookauth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


let userSchema = new mongoose.Schema({
    uid: String,
    name: String,
    email: String,
    pic:String
    
});

module.exports = mongoose.model('User',userSchema)