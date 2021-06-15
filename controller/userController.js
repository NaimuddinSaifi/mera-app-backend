const userModel = require('../model/userModel')

module.exports = {
    login: (req, res) => {
         userModel
        res.send({ rCode: '200', rMsg: 'login', rData: [] })
    },
    signup: (req, res) => {
        res.send({})
    }
}