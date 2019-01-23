const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA('number');
      // .toBeA('Number');

      //   expect(typeof res).toBeA('number');
      //   if (res !== 44) {
      //     throw new Error(`Expected 44, but got ${res}`);
      //   }
    });
  });

  it('should async add two numbers', done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .toBe(7)
        .toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res)
      .toBe(9)
      .toBeA('number');
  });

  it('should async square a number', done => {
    utils.asyncSquare(5, res => {
      expect(res)
        .toBe(25)
        .toBeA('number');
      done();
    });
  });
});

it('should expect some values', () => {
  //   expect(12).toNotBe(11);
  expect({
    name: 'Marcus',
    age: 18
  })
    .toEqual({
      name: 'Marcus',
      age: 18
    })
    .toInclude({ age: 18 });
});

it('should verify firstName and lastName', () => {
  var user = { location: 'Hong Kong', age: 100 };
  var res = utils.setName(user, 'Marcus Chui');

  expect(res).toInclude({
    firstName: 'Marcus',
    lastName: 'Chui'
  });
});
