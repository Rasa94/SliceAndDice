const express = require('express');
const {
    getRecepies,
    getRecepie,
    addRecepie,
    updateRecepie,
    deleteRecepie,
    searchRecepies
} = require('../controllers/controllers');

const router = express.Router();

router
    .route('/')
    .get(getRecepies)
    .post(addRecepie);

router
    .route('/search/:query')
    .get(searchRecepies); 

router
    .route('/:id')
    .get(getRecepie)
    .put(updateRecepie)
    .delete(deleteRecepie);

module.exports = router; 