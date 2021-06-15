const notesModel = require('../model/notesModel')

module.exports = {
    addNotes: (req, res) => {
        const { title, description } = req.body
        if (!title || !description) {
            res.send({ rCode: 400, rMsg: 'Bad Request', rData: [] })
        } else {
            new notesModel(req.body).save((err, saved) => {
                if (err) {
                    return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
                }
                if (saved) {
                    return res.send({ rCode: 201, rMsg: 'Saved Success.', rData: saved })
                }
            })
        }
    },
    deleteNotes: (req, res) => {
        const { noteId } = req.params
        notesModel.findByIdAndDelete({ _id: noteId }, (err, deleted) => {
            if (err) {
                return res.send({ rCode: 500, rMsg: 'Internal Server Error.', rData: [] })
            }
            if (deleted) {
                return res.send({ rCode: 200, rMsg: 'Delete Success.', rData: [] })
            }
        })
    }
}