const express = require('express');
const Alien = require('../models/alien');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(e){
        console.log(e);
    }
})

router.get('/:id', async(req, res) => {
    try{
        const aliens = await Alien.findById(req.params.id);
        res.json(aliens);
    }catch(e){
        res.send('Error' + e);
    }
})

router.post('/', async(req, res) =>{
    const {firstName, lastName} = req.body;
    const alien = new Alien({
        firstName: firstName,
        lastName: lastName
    })

    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(e){
        res.send('Error' + e);
    }
    
})

router.patch('/:id', async(req,res) => {
    const{firstName, lastName} = req.body;
    const{id} = req.params;
    try{
        const alien = await Alien.findById(id);
        alien.firstName = firstName;
        alien.lastName = lastName;
        const a1 = await alien.save();
        res.json(a1);
    }catch(e){
        res.send('Error' + e);
    }
})

router.delete('/:id', async(req,res) => {
    const{id} = req.params;
    try{
        const a1 = await Alien.findByIdAndRemove(id);
        res.json(a1);        
    }catch(e){
        res.send('Error' + e);
    }
})

module.exports = router;