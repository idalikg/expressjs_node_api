// modules
const express = require('express');

const configAPP = require('./config');
const api = require('./app');

// init app

api.listen(configAPP.port, () => {
    console.log(`Server running on port ${configAPP.port}`);
});