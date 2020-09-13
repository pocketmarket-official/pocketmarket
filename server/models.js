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
    compCd: {
        type: Sequelize.STRING
    },
    brandCd: {
        type: Sequelize.STRING
    },
    storCd: {
        type: Sequelize.STRING
    },
    storNm: {
        type: Sequelize.STRING
    },
    storCeo: {
        type: Sequelize.STRING
    },
    bizopNo: {
        type: Sequelize.STRING
    },
    storTel: {
        type: Sequelize.STRING
    },
    storMobile: {
        type: Sequelize.STRING
    },
    storFax: {
        type: Sequelize.STRING
    },
    postCd: {
        type: Sequelize.STRING
    },
    storMail: {
        type: Sequelize.STRING
    },
    storAddr1: {
        type: Sequelize.STRING
    },
    storAddr2: {
        type: Sequelize.STRING
    },
    storOldAddr : {
        type: Sequelize.STRING
    },
    openTm : {
        type: Sequelize.STRING
    },
    closeTm: {
        type: Sequelize.STRING
    },
    dbYn: {
        type: Sequelize.STRING
    },
    useYn: {
        type: Sequelize.STRING
    },
    bankCd: {
        type: Sequelize.STRING
    },
    bankNo: {
        type: Sequelize.STRING
    },
    openDt: {
        type: Sequelize.STRING
    },
    closeDt: {
        type: Sequelize.STRING
    },
    imageLogoUrl: {
        type: Sequelize.STRING
    },
    org: {
        type: Sequelize.STRING
    },
    xposition: {
        type: Sequelize.STRING
    },
    yposition: {
        type: Sequelize.STRING
    },
    likeCount: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    openYn: {
        type: Sequelize.STRING
    },
    insUs: {
        type: Sequelize.STRING
    },
    modUs: {
        type: Sequelize.STRING
    }
});



module.exports = {
    Sequelize
    ,sequelize
    ,User
    ,Festival
    ,Store
};