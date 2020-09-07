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
    adress: {
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
    storeCd: {
        type: Sequelize.STRING
    },
    storeNM: {
        type: Sequelize.STRING
    },
    storeCeo: {
        type: Sequelize.STRING
    },
    bizopNo: {
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
    postCd: {
        type: Sequelize.STRING
    },
    storeMail: {
        type: Sequelize.STRING
    },
    storeAddr1: {
        type: Sequelize.STRING
    },
    storeAddr2: {
        type: Sequelize.STRING
    },
    storeOldAddr : {
        type: Sequelize.STRING
    },
    openTm : {
        type: Sequelize.INTEGER
    },
    closeTm: {
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