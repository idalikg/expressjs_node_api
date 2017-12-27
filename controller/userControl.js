const express = require('express');

const users = [
    [ name = "Juan", info = { id:1, age:23 }],
    [ name = "Andrea", info = { id:2, age:30 }],
    [ name = "Luis", info = { id:3, age:25 }]
];

const home = (req, res, next) => {
    // res.status(200).send('Página principal usuarios');
    const data1 = {
        title : 'ALTA USUARIOS'
    };
    res.status(200).render('index', data1);
    next();
};

const listUsers = (req, res, next) => {
    res.render('users', {
        title : "LISTA USUARIOS",
        users : users
    });
    // const {nameUser} = req.params;
    // res.status(200).send(`${nameUser} has been REGISTERED!!!`, data);
    next();
};

const register = (req, res) => {
    const { newName } = req.body;
    const { newAge } = req.body;
    
    users.push([
        name = newName,
        info = { 
            id: users.length + 1,
            age: newAge
        }
    ]
);

    res.redirect('/users');
    // res.status(200).send(`${nameUser} has been REGISTERED!!!`, data);
};

module.exports = {
    home,
    listUsers,
    register
}
