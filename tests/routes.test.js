const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');

const { expect } = chai;

chai.use(chaiHttp);

describe('/menu', () => {
  it('it should get menu from server', done => {
    chai.request(server)
      .get('/menu')
      .end((err, res) => {
        expect([200, 304]).include(res.status);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
