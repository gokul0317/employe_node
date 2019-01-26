const express = require('express');
var router = express.Router();
var objectID = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employees');

router.get('/', (req,res,next) => {
    Employee.find( (err,docs) =>{
        if(!err) { res.send(docs); }
        else { console.log( 'Error :' + JSON.stringify(err,undefined,2))}
    })
})

router.get('/:id' , (req,res,next) =>{
    if(!objectID.isValid(req.params.id))
          return status(400).send(`Error in ID given : ${req.params.id} `);
    else
       Employee.findById( req.params.id , (err , doc) =>{
           if(!err){
               res.send(doc);
           }else{
               console.log('error '+ err)
           }
       })      
})

router.post('/', (req,res,next) =>{
    var emp = new Employee ({
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    });

    emp.
    save( (err,doc) => {
            if( !err) { console.log(doc); res.send(doc); }
            else { console.log( 'Error :' + JSON.stringify( err, JSON.stringify(err,undefined,2)))}
    }) 
})

router.put('/:id', (req,res,next) =>{
    if(!objectID.isValid(req.params.id))
          return status(400).send(`Error in ID given : ${req.params.id} `);
    else
    var emp = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id , { $set : emp}, {new : true }, (err,doc) =>{
        if( !err) { console.log(doc); res.send(doc); }
        else { console.log( 'Error :' + JSON.stringify( err, JSON.stringify(err,undefined,2)))}
    } )
  
})

router.delete('/:id',(req,res,next) => {
    if(!objectID.isValid(req.params.id))
          return status(400).send(`Error in ID given : ${req.params.id} `);
    else
      Employee.findByIdAndDelete (req.params.id , (err,doc) =>{
    
        
    })
})
module.exports = router;