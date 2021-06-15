const queryModel = require('../model/queryModel')

module.exports = {
    addQuery: async (req, res) => {
        queryModel.findOne({ title: req.body.title }, (err, result) => {
            if (err) {
                return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
            }
            if (result) {
                return res.send({ rCode: 404, rMsg: 'Already Exists.', rData: [] })
            }
            if (!result) {
                new queryModel(req.body).save((err, save) => {
                    if (err) {
                        return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
                    }
                    if (save) {
                        return res.send({ rCode: 200, rMsg: 'Add Success.', rData: save })
                    }
                })
            }
        })
    },
    deleteQuery: (req, res) => {
        const { queryId } = req.params
        console.log(req)
        queryModel.findByIdAndDelete({ _id: queryId }, (err, deleted) => {
            if (err) {
                return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
            }   
            if (deleted) {
                return res.send({ rCode: 200, rMsg: 'Delete Success.', rData: [] })
            }
        })
    }
}