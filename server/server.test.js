const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// Server
// Get /
// some test case
// Get /users
//some test case

describe('Server', () => {
  describe('Get /', () => {
    it('should return hello world response', done => {
      request(app)
        .get('/')
        .expect(404)
        // .expect('hello world!')
        // .expect({ error: 'Page not found' })
        .expect(res => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('Get /users', () => {
    it('should return my user object', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: 'Andrew',
            age: 25
          });
        })
        .end(done);
    });
  });
});
