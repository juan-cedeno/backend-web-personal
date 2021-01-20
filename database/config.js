const mongoose = require('mongoose');

const connectDatabase = () => {

    try {
        
        mongoose.connect(process.env.DBURL, 
        {

        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex : true

       });
       console.log('connect');

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    connectDatabase
}