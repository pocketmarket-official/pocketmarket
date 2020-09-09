const models = require('../models');
import {renameKeys} from '../util/util'

const index = function(req, res) {
    req.query.limit = req.query.limit || 10;
    console.log(req.headers['content-range']);
    const contentRange = req.headers['content-range'] ? req.headers['content-range'].split('-') : null;
    let limit = 10;
    let offset = 0;
    //유효성 체크
    if (contentRange) {
        if (contentRange.length < 2)
            return res.status(400).end();
         offset = parseInt(contentRange[0], 10);
         limit = parseInt(contentRange[1], 10);
        if (Number.isNaN(offset) || Number.isNaN(limit)) {
            return res.status(400).end();
        }
    }
    models.Festival.findAndCountAll({
        limit: limit,
        offset: offset,
        attributes: { exclude: ['createdAt', 'updatedAt']}
    })
        .then(users => {
            res.json(users);
        });
    //res.json(users.slice(0,limit));
};

const create = (req, res) => {
    const newFestival = req.body;
    if (!newFestival.name) return res.status(400).end();
    console.log(newFestival);
    models.Festival.create(newFestival)
        .then(festival => {
            res.status(201).json(festival);
        })
        .catch(err => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).end();
            }
            console.log(err);
            return res.status(500).end();
        });
};

module.exports = {
    index,
    create
}