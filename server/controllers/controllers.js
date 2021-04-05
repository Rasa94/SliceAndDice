const Recepie = require('../models/model');
const search = require('../models/recipeSearch');
const { ReplSet } = require('mongodb');


const searchRecepies = async(req, res, next) => {
    try {
        const searchResults = await search(req.params.query);
        
        res.status(200).json({
            sucsess: true,
            data: searchResults.data.results 
        })
    } catch (err) {
        console.error(err)
    }
}

const getRecepies = async(req, res, next) => {
    try {
        const allRecepies = await Recepie.find();
        res.status(200).json({
            sucsess: true,
            data: allRecepies 
        })
    } catch(err) {
        console.error(err)
    }
};

const getRecepie = async(req, res, next) => {
    try {
        const recepie = await Recepie.findById(req.params.id); 
        res.status(200).json({
            sucsess: true,
            data: recepie
        })
    } catch(err) {
        console.error(err)
    }
};

const addRecepie = async(req, res, next) => {
    try {
        const newRecepie = await Recepie.create(req.body);
        res.status(200).json({
            sucsess: true,
            data: newRecepie
        })
    } catch(err) {
        console.error(err)
    }
};

const updateRecepie = async(req, res, next) => {
    try {
        const updatedRecepie = await Recepie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            sucsess: true,
            data: updatedRecepie
        })
    } catch(err) {
        console.error(err)
    }
};

const deleteRecepie = async(req, res, next) => {
    try {
        console.log(req.params.id)
        const deleteRecepie = await Recepie.findByIdAndDelete(req.params.id);
        res.status(200).json({
            sucsess: true,
            data: {}
        })
    } catch(err) {
        console.error(err)
    }
};

module.exports = {
    getRecepies,
    getRecepie,
    addRecepie,
    updateRecepie,
    deleteRecepie,
    searchRecepies
};