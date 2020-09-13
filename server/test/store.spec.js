const app = require('../app');
const request = require('supertest');
const should = require('should');
const models = require('../models');

describe('GET /store', () => {
    const stores = [
        {
            storeNm: '스타벅스',
            imageLogoUrl: 'store/log1.jpeg',
            description: '커피전문점 스타벅스입니다. ',
            likeCount: 21,
            xposition: 126.959825301786,
            yposition: 37.3830222877067
        },
        {
            storeNm: '강남핫도그',
            imageLogoUrl: 'store/log2.jpeg',
            description: '맛있는 핫도그',
            likeCount: 13,
            xposition: 126.96062441408118,
            yposition: 37.383628044534525
        },
        {
            storeNm: '이디야커피',
            imageLogoUrl: 'store/log3.jpeg',
            description: '커피커피',
            likeCount: 14,
            xposition: 126.953515910111,
            yposition: 37.3899722725388
        }
    ];
    before((done) => {
        models.sequelize.sync({force: true}).then(() => { done(); });
    });
    before((done) => {
        models.Store.bulkCreate(stores).then(() => { done(); });
    });
    describe('성공시', () => {
        it('축제 객체를 담은 객체로 응답한다 ', (done) => {
            request(app)
                .get('/store')
                .set({
                    'content-range': '0-2' //offset-limit
                    ,Accept: 'application/json'
                })
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    res.body.should.be.json;
                    res.body.should.have.property('total_count');
                    res.body.should.have.property('rows');
                    res.body.should.have.property('total_count',3);
                    res.body.rows.should.be.instanceOf(Array);
                    res.body.rows[0].should.have.property('id');
                    done();
                });
        });
    })
})
