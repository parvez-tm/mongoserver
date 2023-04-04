const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        auto: true
    },
    fullname: {
        type: String,
        required : true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    qualification: {
        type: String,
        require: false,
      },
},{
    versionKey: false
})

module.exports = mongoose.model('student', studentSchema);

