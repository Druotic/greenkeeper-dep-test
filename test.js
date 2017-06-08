const gkdt = require(".");
const {expect} = require("chai");

describe("greenkeeper-dep-test", () => {
  it("returns 'hello world'", () => expect(gkdt()).to.equal("hello world"));
});
