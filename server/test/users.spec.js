const app = require('../app');
const request = require('supertest');
const should = require('should');
const models = require('../models');

describe('GET /users는', () => {
    const users = [
        { email: 'shson@test.com'},
        { email: 'eunbee@mocha.com'},
        { email: 'jiyoung@for.com' }
    ];
    before((done) => {
        models.sequelize.sync({force: true}).then(() => { done(); });
    });
    before((done) => {
        models.User.bulkCreate(users).then(() => { done(); });
    });
    describe('성공시', () => {
        it('유저 객체를 담은 배열로 응답한 ', (done) => {
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });
        it('최대 limit 갯수만큼 응답한다 ', (done) => {
            request(app)
                .get('/users?limit=2')
                .end((err, res) => {
                    res.body.should.have.lengthOf(2);
                    done();
                });
        })
    })
    describe('실패시 ', () => {
        it('limit이 숫자형이 아니면 400을 응답한다', (done) => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done);
        })
    })
})
describe('GET /users/1은', () => {
    const users = [
        { email: 'shson@test.com'},
        { email: 'eunbee@mocha.com'},
        { email: 'jiyoung@for.com' }
    ];
    before((done) => {
        models.sequelize.sync({force: true}).then(() => { done(); });
    });
    before((done) => {
        models.User.bulkCreate(users).then(() => { done(); });
    });
    describe('성공시 ', () => {
        it('id가 1인 유저객체를 반환한다 ', (done) =>{
            request(app)
                .get('/users/1')
                .end((err, res) => {
                    res.body.should.be.property('id', 1);
                    done();
                })
        })
    })
    describe('실패시 ', () => {
        it('id가 숫자가 아닐 경우 400으로 응답한다 ', (done) => {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done);
        })
        it('id로 유저를 찾을 수 없는 경우 404로 응답한다 ', (done) => {
            request(app)
                .get('/users/999')
                .expect(404)
                .end(done);
        })
    })
})
describe('DELETE /users/1', () =>{
    const users = [
        { email: 'shson@test.com'},
        { email: 'eunbee@mocha.com'},
        { email: 'jiyoung@for.com' }
    ];
    before((done) => {
        models.sequelize.sync({force: true}).then(() => { done(); });
    });
    before((done) => {
        models.User.bulkCreate(users).then(() => { done(); });
    });
    describe('성공시 ', () => {
        it('204를 응답한다 ', (done) => {
            request(app)
                .delete('/users/1')
                .expect(204)
                .end(done)
        })
    })
    describe('실패시 ', () => {
        it('id가 숫자가 아닐경우 400으로 응답한다', (done) => {
            request(app)
                .delete('/users/one')
                .expect(400)
                .end(done)
        })
    })
})
describe('POST /users', () => {
    const users = [
        { email: 'shson@test.com'},
        { email: 'eunbee@mocha.com'},
        { email: 'jiyoung@for.com' }
    ];
    before((done) => {
        models.sequelize.sync({force: true}).then(() => { done(); });
    });
    before((done) => {
        models.User.bulkCreate(users).then(() => { done(); });
    });
    describe('성공시 ', () => {
        let body;
        let email = 'daniel'
        before((done) => {
            request(app)
                .post('/users')
                .send({email: 'daniel@test.com'})
                .expect(201)
                .end((err, res) => {
                    body = res.body;
                    done();
                });
        })
        it('생성된 유저 객체를 반환한다', () => {
            body.should.have.property('id');
        })
        it('입력한 email을 반환한', () => {
            body.should.have.property('email', email);
        })
    })
    describe('실패시 ', () => {
        it('email 파라미터 누락시 400을 반환한다 ', (done) => {
            request(app)
                .post('/users')
                .send({})
                .expect(400)
                .end(done)
        })
        it('email이 중복일 경우 409를 반환한다 ', (done) => {
            request(app)
                .post('/users')
                .send({email: 'eunbee'})
                .expect(409)
                .end(done)
        })
    })
})
describe.only('PUT /users', () => {
    const users = [
        { email: 'shson@test.com'},
        { email: 'eunbee@mocha.com'},
        { email: 'mina@for.com' }
    ];
    before((done) => {
        models.sequelize.sync({force: true}).then(() => { done(); });
    });
    before((done) => {
        models.User.bulkCreate(users).then(() => { done(); });
    });
    describe('성공시 ', () => {
        it('변경된 email을 응답한다 ', (done) => {
            const email = 'jiyoung@for.com';
            request(app)
                .put('/users/3')
                .send({ email })
                .end((err, res) => {
                    res.body.should.have.property('email', email);
                    done();
                });
        })
    })
    describe('실패시 ', () => {
        it('정수가 아닌 id일 경우 400 응답 ', (done) => {
            request(app)
                .put('/users/three')
                .send({})
                .expect(400)
                .end(done);
        })
        it('email이 없을 경우 400 응답 ', (done) => {
            request(app)
                .put('/users/1')
                .send({})
                .expect(400)
                .end(done);
        })
        it('없는 유저일 경우 404 응답', (done) => {
            request(app)
                .put('/users/999')
                .send({email : 'alias'})
                .expect(404)
                .end(done);
        })
        it('이름이 중복일 경우 409 응답 ', (done) => {
            request(app)
                .put('/users/2')
                .send({email : 'jiyoung@for.com'})
                .expect(409)
                .end(done);
        })
    })
})