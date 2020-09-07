const models = require('../models');

module.exports = () => {
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    }
    console.log(process.env.NODE_ENV + ' mode');
    return models.sequelize.sync(options);
}