const model = require('../model/favsModel')

module.exports = {
    listFavs: (req, res) => {
        model.find({}, (err, docs) => {
            if (err) {
                return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
            }
            if (docs) {
                return res.send({ rCode: 200, rMsg: 'Success.', rData: docs })
            }
        })
    },
    addFav: (req, res) => {
        const { title, description } = req.body
        if (!title || !description) {
            res.send({ rCode: 400, rMsg: 'Bad Request', rData: [] })
        } else {
            new model(req.body).save((err, saved) => {
                if (err) {
                    return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
                }
                if (saved) {
                    return res.send({ rCode: 201, rMsg: 'Saved Success.', rData: saved })
                }
            })
        }
    },
    deleteFav: (req, res) => {
        const { favId } = req.params
        model.findByIdAndDelete({ _id: favId }, (err, deleted) => {
            if (err) {
                return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
            }
            if (deleted) {
                return res.send({ rCode: 200, rMsg: 'Delete Success.', rData: [] })
            }
        })
    }
}