require('chai').should();

const balanced = require('../index.js');

describe('Basic Tests', function() {
  it('should return true if string is balanced', () => {
    balanced('()').should.be.true;
    balanced('()()').should.be.true;
    balanced('(([{}]{}))').should.be.true;
    balanced('[(([{}]{[]}))]').should.be.true;
  });

  it('should return false if string is not balanced', () => {
    balanced('(').should.be.false;
    balanced('())').should.be.false;
    balanced('(([{}]{))').should.be.false;
  });

  it('should return false if is not in order', () => {
    balanced('[(([{}]{][]}))]').should.be.false;
    balanced(')(').should.be.false;
    balanced('[{}[]()[()])(]').should.be.false;
  });
});
