const app = require('../app');
const request = require('supertest');
const should = require('should');
const models = require('../models');

describe('GET /store', () => {
/*    const stores = [
        {
            startDate: new Date('2020-06-30'),
            endDate: new Date('2020-12-30'),
            startTime: 8,
            endTime: 17,
            description: '이것은 first 설명이니라',
            address: '서울시 흑석동',
            imageUrl: '/store/1'
        },
        {
            startDate: new Date('2021-06-30'),
            endDate: new Date('2022-12-30'),
            startTime: 8,
            endTime: 17,
            description: '이것은 second 설명이니라',
            address: '서울시 방배동',
            imageUrl: '/store/2'
        },
        {
            startDate: new Date('2023-06-30'),
            endDate: new Date('2024-12-30'),
            startTime: 8,
            endTime: 17,
            description: '이것은 third 설명이니라',
            address: '서울시 문정동',
            imageUrl: '/store/3'
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
                    res.body.should.have.property('count');
                    res.body.should.have.property('rows');
                    //console.log(res.body);
                    done();
                });
        });
    })
    describe('POST /store', () => {
        before((done) => {
            models.sequelize.sync({force: true}).then(() => { done(); });
        });

        describe('성공시 ', () => {
            let body;
            const newStore = {
                name: '불꽃축제',
                startDate: new  Date('2021-06-30'),
                endDate: new Date('2022-12-30'),
                startTime: 8,
                endTime: 17,
                description: '이것은 second 설명이니라',
                address: '서울시 방배동',
                imageUrl: '/store/2'
            }
            before((done) => {
                request(app)
                    .post('/store')
                    .send(newStore)
                    .expect(201)
                    .end((err, res) => {
                        body = res.body;
                        done();
                    });
            })
            it('생성된 축제 객체를 반환한다', () => {
                body.should.have.property('id');
            })
            it('입력한 축제이름을 반환한다', () => {
                body.should.have.property('name', newStore.name);
            })
        })
        describe('실패시 ', () => {
            it(' 파라미터 누락시 400을 반환한다 ', (done) => {
                request(app)
                    .post('/store')
                    .send({})
                    .expect(400)
                    .end(done)
            })
        })
    })

 */
})