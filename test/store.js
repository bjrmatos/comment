var expect = require("chai").expect;
var store = require("../lib/store.js");

store.client.flushdb();

describe("Store", function () {
  describe('#set()', function () {
    it('should set a value and return true', function () {
      var int = store.set('some-table', 'some-key', ['some-value']);
      expect(int).to.equal(true);
    });
  });
  describe('#get()', function () {
    it('should get a value and trigger a callback', function (done) {
      store.get('some-table', 'some-key', function (err, data) {
        expect(data).to.have.property("0", "some-value");
        done();
      });
    });
  });
  describe('#incr()', function () {
    it('should increment a unexisting key', function (done) {
      store.incr('some-type', 'some-key', 1, function (err, incr) {
        expect(incr).to.equal(1);
        done();
      });
    });
  });
  describe('list', function () {
    describe('#append()', function () {
      it('should append a value to a list and return a length of one', function (done) {
        store.list.append('some-key', 'some-value', function (err, count) {
          expect(count).to.equal(1);
          done();
        })
      });
    });
    describe('#prepend()', function () {
      it('should prepend a value to a list and return a length of two', function (done) {
        store.list.append('some-key', 'some-other-value', function (err, count) {
          expect(count).to.equal(2);
          done();
        })
      });
    });
    describe('#range()', function () {
      it('should query 3 values and return only 2 values', function (done) {
        store.list.range('some-key', 0, 2, function (err, list) {
          expect(list).to.deep.equal([ '"some-value"', '"some-other-value"' ]);
          done();
        })
      });
    });
  });
});
