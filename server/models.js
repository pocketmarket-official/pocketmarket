const Sequelize = require('sequelize');
require('dotenv').config();
let sequelizeOption;
console.log('mode: '+ process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    sequelizeOption = {
        dialect: 'sqlite',
        storage: './db.sqlite',
        define: {
            freezeTableName: true,
            underscored: true,
        }
    }
} else if (process.env.NODE_ENV === 'production') {
    sequelizeOption = {
        dialect: 'mysql'
        ,username: process.env.DB_USER
        ,password: process.env.DB_PASSWORD
        ,host: process.env.DB_HOST
        ,database: process.env.DB_SCHEMA,
        define: {
            freezeTableName: true,
            underscored: true,
        }
    }
}


const sequelize = new Sequelize(sequelizeOption);

const User = sequelize.define('M_USER', {
    email: {
        type: Sequelize.STRING,
        unique: true
    }
});

const Festival = sequelize.define('M_FESTIVAL', {
    name: {
        type: Sequelize.STRING
    },
    startDate: {
        type: Sequelize.DATEONLY
    },
    endDate: {
        type: Sequelize.DATEONLY
    },
    startTime: {
        type: Sequelize.INTEGER
    },
    endTime: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    hostOrganization: {
        type: Sequelize.STRING
    },
    hostManager: {
        type: Sequelize.STRING
    },
    hostPhone : {
        type: Sequelize.STRING
    },
    hostEmail : {
        type: Sequelize.STRING
    }
});

const Store = sequelize.define('M_STORE', {
    companyCode: {
        type: Sequelize.STRING
    },
    storeCode: {
        type: Sequelize.STRING
    },
    storeName: {
        type: Sequelize.STRING
    },
    storeCeo: {
        type: Sequelize.STRING
    },
    businessNumber: {
        type: Sequelize.STRING
    },
    storeTel: {
        type: Sequelize.STRING
    },
    storeMobile: {
        type: Sequelize.STRING
    },
    storeFax: {
        type: Sequelize.STRING
    },
    postCode: {
        type: Sequelize.STRING
    },
    storeMail: {
        type: Sequelize.STRING
    },
    storeAddress1: {
        type: Sequelize.STRING
    },
    storeAddress2: {
        type: Sequelize.STRING
    },
    storeOldAddress : {
        type: Sequelize.STRING
    },
    openTime : {
        type: Sequelize.INTEGER
    },
    closeTime: {
        type: Sequelize.INTEGER
    }
});



module.exports = {
    Sequelize
    ,sequelize
    ,User
    ,Festival
    ,Store
};