const expect = require("chai").expect;

const scheduleMeeting = require("../src/scheduleMeeting");

describe("scheduleMeeting()", () => {
  it("should return false for (7:00, 15)", () => {
    expect(scheduleMeeting("7:00",15)).to.equal(false);
  });

  it("should return false for (07:15, 30)", () => {
    expect(scheduleMeeting("7:15",30)).to.equal(false);
  });

  it("should return true for (07:30, 30)", () => {
    expect(scheduleMeeting("7:30",30)).to.equal(true);
  });

  it("should return true for (11:30, 60)", () => {
    expect(scheduleMeeting("11:30",60)).to.equal(true);
  });

  it("should return true for (17:00, 60)", () => {
    expect(scheduleMeeting("17:00",45)).to.equal(true);
  });

  it("should return true for (17:30, 30)", () => {
    expect(scheduleMeeting("17:30",30)).to.equal(false);
  });

  it("should return true for (18:00, 15)", () => {
    expect(scheduleMeeting("18:00",15)).to.equal(false);
  });
});
