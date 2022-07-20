const mongoose = require('mongoose');

mongoose.connect('mmongodb://127.0.0.1:27017/remyterest', {
    useNewUrlParser: true
})
.then(db => console.log(`DB is connected`))
.catch(err => console.log(err));
