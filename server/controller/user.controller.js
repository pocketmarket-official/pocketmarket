const models = require('../models');

const index = function(req, res) {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    }
    models.User.findAll({
        limit: limit
    })
        .then(users => {
            res.json(users);
        });
    //res.json(users.slice(0,limit));
};

const show = function (req, res) {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).end();

    models.User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if (!user) return res.status(404).end();
        res.json(user);
    });
};

const destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();
    models.User.destroy({
        where: {id}
    }).then(() => {
        res.status(204).end();
    })
};

const create = (req, res) => {
    const email = req.body.email;
    if (!email) return res.status(400).end();

    models.User.create({email})
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).end();
            }
            console.log(err);
            return res.status(500).end();
        });
};

const update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    const email = req.body.email;
    if (!email) return res.status(400).end();

    models.User.findOne({
        where: {id}
    }).then(user => {
        if (!user) return res.status(404).end();
        user.email = email;
        console.log(email);
        user.save()
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                if (err.name === 'SequelizeUniqueConstraintError') {
                    return res.status(409).end();
                }
                res.status(500).end();
            });
    });
};

module.exports = {
    index: index ,
    show: show ,
    destroy : destroy ,
    create : create ,
    update: update
}