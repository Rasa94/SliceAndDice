const mongoose = require('mongoose');
const RecepieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [60, 'Name can not be more than 60 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [700, 'Description can not be more than 700 characters'],
    },
    ingredients: {
        type: Array,
        items: {
            type: String
        },
        minItems: 1,
        maxItems: 20
    },
    steps: {
        type: Array,
        items: {
            type: String
        },
        minItems: 1,
        maxItems: 20
    }

});

module.exports = mongoose.model('Recepie', RecepieSchema);

