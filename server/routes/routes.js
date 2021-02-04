const express = require('express');
const {
    getRecepies,
    getRecepie,
    addRecepie,
    updateRecepie,
    deleteRecepie
} = require('../controllers/controllers');

const router = express.Router();

router
    .route('/')
    .get(getRecepies)
    .post(addRecepie);

router
    .route('/:id')
    .get(getRecepie)
    .put(updateRecepie)
    .delete(deleteRecepie);

module.exports = router; 