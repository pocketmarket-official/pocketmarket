const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    define: {
        freezeTableName: true,
    }
});

const User = sequelize.define('M_USER', {
    email: {
        type: Sequelize.STRING,
        unique: true
    }
});

module.exports = {Sequelize, sequelize, User};