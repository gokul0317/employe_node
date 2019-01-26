const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD_DB' , (err) => {
    if(!err)
               console.log('conected');
    else
           console.log('Error :' + JSON.stringify(err , undefined , 2));
});


module.exports = mongoose;
