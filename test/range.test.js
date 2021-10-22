const expect = require("chai").expect;

const range = require("../src/range");

describe("range()", () => {
  context("when called with start and end arguments", () => {
    it("should return [3] for (3, 3)", () => {
      expect(range(3, 3)).deep.to.equal([3]);
    });

    it("should return [3, 4, 5, 6, 7, 8] for (3, 8)", () => {
      expect(range(3, 8)).deep.to.equal([3, 4, 5, 6, 7, 8]);
    });

    it("should return [] for (3, 0)", () => {
      expect(range(3, 0)).deep.to.equal([]);
    });
  })

  context("when called with only start argument - start3 = range(3)", () => {
    let start3;

    before(() => {
      start3 = range(3);
    });

    it("should return [3] for start3(3)", () => {
      expect(start3(3)).deep.to.equal([3]);
    });

    it("should return [3, 4, 5, 6, 7, 8] for start3(8)", () => {
      expect(start3(8)).deep.to.equal([3, 4, 5, 6, 7, 8]);
    });

    it("should return [] for start3(0)", () => {
      expect(start3(0)).deep.to.equal([]);
    });
  });

  context("when called with only start argument - start4 = range(4)", () => {
    let start4;

    before(() => {
      start4 = range(4);
    });

    it("should return [4, 5, 6] for start4(6)", () => {
      expect(start4(6)).deep.to.equal([4, 5, 6]);
    });
  });
});
