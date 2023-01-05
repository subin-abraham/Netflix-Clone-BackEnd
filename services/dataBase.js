const mongoose  = require("mongoose");

mongoose.connect('mongodb://localhost:27017/netflix', {
    useNewUrlParser: true
});

const user = mongoose.model('user',
    {
        emailId: String,
        password: String,
        users: []

    });

module.exports = {
    user
}
