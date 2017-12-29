const express = require('express');

const users = [
    [ name = "Juan", info = { id:1, age:23 }],
    [ name = "Andrea", info = { id:2, age:30 }],
    [ name = "Luis", info = { id:3, age:25 }]
];

const home = (req, res, next) => {
    // res.status(200).send('Página principal usuarios');
    let locals = {
        title : 'ALTA USUARIOS'
    };
    res.render('index', locals);
};

const listUsers = (req, res, next) => {
    let locals = {
        title : "LISTA USUARIOS",
        users : users
    }
    res.render('users', locals);
    // const {nameUser} = req.params;
    // res.status(200).send(`${nameUser} has been REGISTERED!!!`, data);
};

const register = (req, res, next) => {
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
    // res.status(200).sennd(`${nameUser} has been REGISTERED!!!`, data);
};

module.exports = {
    home,
    listUsers,
    register
}
