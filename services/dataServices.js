const dataBase = require('./dataBase')


const register = (emailId, password) => {
    return dataBase.user.findOne({ emailId })
        .then(user => {
            if (user) {
                return {
                    status: "False",
                    statusCode: 400,
                    message: "User Already Registered"
                }
            }
            else {
                const newUser = new dataBase.user({
                    emailId: emailId,
                    password: password,
                    users: []

                })
                newUser.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: "Successfully Registered"
                }
            }
        })
}

module.exports={
    register
}