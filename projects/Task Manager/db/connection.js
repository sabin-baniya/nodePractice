const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://sabin:admin@nodeandexpressprojects.qhu9j.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('Successfully connected to the database')).catch(err => console.log(err))