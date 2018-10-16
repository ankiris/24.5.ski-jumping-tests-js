const assert = require("assert");
const distancePoints = require("./calculateDistancePoints");

describe("distancePoints", () => {
    
    describe("normalHill", () => {
      it("should return a number when jump is shorter than k point", () => {
        const actual = distancePoints("N", 88, 98);
        const expected = 73;
        assert.equal(actual, expected);
      });
      it("should return a number when jump equals than k point", () => {
        const actual = distancePoints("N", 98, 98);
        const expected = 60;
        assert.equal(actual, expected);
      });
      it("should return a number when jump is longer than k point", () => {
        const actual = distancePoints("N", 111, 98);
        const expected = 86;
        assert.equal(actual, expected);
      });
    });
  
    describe("largeHill", () => {
      it("should return a number when jump is shorter than k point", () => {
        const actual = distancePoints("L", 109.5, 120);
        const expected = 41.1;
        assert.equal(actual, expected);
      });

      it("should return a number when jump equals than k point", () => {
        const actual = distancePoints("L", 120, 120);
        const expected = 60;
        assert.equal(actual, expected);
      });

      it("should return a number when jump is longer than k point", () => {
        const actual = distancePoints("L", 134, 120);
        const expected = 85.2;
        assert.equal(actual, expected);
      });
    });
  
    describe("xLargeHill", () => {
      it("should return a number when jump is shorter than k point", () => {
        const actual = distancePoints("xL", 144, 200);
        const expected = 52.8;
        assert.equal(actual, expected);
      });
      it("should return a number when jump equals than k point", () => {
        const actual = distancePoints("XL", 200, 200);
        const expected = 120;
        assert.equal(actual, expected);
      });
      it("should return a number when jump is longer than k point", () => {
        const actual = distancePoints("XL", 208.5, 200);
        const expected = 130.2;
        assert.equal(actual, expected);
      });
    });
  });
  