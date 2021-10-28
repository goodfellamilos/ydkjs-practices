const expect = require("chai").expect;

const slotMachine = require("../src/slotMachine");

// ☺ | ★ | ♣
// ★ | ☾ | ☺
// ☾ | ☀ | ★
const SLOT_MACHINE_RESULT_REGEXP = /^(([♠♥♦♣☺★☾☀]\s\|\s){2}[♠♥♦♣☺★☾☀]\n){2}([♠♥♦♣☺★☾☀]\s\|\s){2}[♠♥♦♣☺★☾☀]/;

describe("slotMachine()", () => {
  it("should return correctly formatted slot result for different spins", () => {
    slotMachine.spin();
    expect(slotMachine.display()).to.match(SLOT_MACHINE_RESULT_REGEXP);

    slotMachine.spin();
    expect(slotMachine.display()).to.match(SLOT_MACHINE_RESULT_REGEXP);

    slotMachine.spin();
    expect(slotMachine.display()).to.match(SLOT_MACHINE_RESULT_REGEXP);
  });
});
