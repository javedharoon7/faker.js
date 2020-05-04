if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("television.js", function () {
  
  });

  describe("brand()", function () {
      it("returns random brands", function () {
          sinon.stub(faker.television, 'brands').returns('Sony');
          var brands = faker.television.brands();

          assert.equal(brands, 'Sony');
          faker.television.brand.restore();
      });
  });

  describe("platform()", function () {
    it("returns random television platform", function () {
      sinon.stub(faker.television, 'platform').returns('Flipkart');
          var platform = faker.television.platform();

          assert.equal(platform, 'Flipkart');
          faker.television.platform.restore();
      });
  });

  describe("price()", function () {
      it("returns random television price", function () {
          sinon.stub(faker.television, 'price').returns('80000');
          var price = faker.television.price();

          assert.equal(prices, '80000');
          faker.television.price.restore();
      });


  });
