const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
     description : {
        type : String,
        
    },
    markdon : {
        type : String,
        require : true
    },
    creatAt : {
        type : Date,
        default : Date.now(),

    }
})


module.exports = mongoose.model('Article', articleSchema) // on l'appel Article