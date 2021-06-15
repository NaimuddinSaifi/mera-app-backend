const mongoose = require('mongoose')
const url_local = 'mongodb://localhost:27017/grievance_portal_db'
const url = 'mongodb+srv://naimu:KYUsp6VpffTEjiF1@cluster0.t6uhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const url_cloud = 'mongodb+srv://naimu:Pass@786@cluster0.t6uhb.mongodb.net/meraAppDb?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, db) => {
    if (err) {
        console.log('DB err.', err)
    }
    if (db) {
        console.log('DB connected')
    }
})

