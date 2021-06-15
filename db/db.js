const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/grievance_portal_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, db) => {
    if (err) {
        console.log('DB err.',err)
    }
    if (db) {
        console.log('DB connected')
    }
})

