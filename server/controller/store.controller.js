const models = require('../models');


const index = function(req, res) {
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
    models.Store.findAndCountAll({
        limit: limit,
        offset: offset,
        attributes: ['id', 'stor_nm', 'xposition', 'yposition', 'like_count', 'image_logo_url', 'description']
    })
        .then(store => {
            //console.log(store)
            let response = {};
            response['total_count'] = store['count'];
            response['rows'] = store['rows'];
            res.json(response);
        });
    //res.json(users.slice(0,limit));
};

module.exports = {
    index
}