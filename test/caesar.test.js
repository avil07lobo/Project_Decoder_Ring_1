// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarShift", () => {
  it("(thinkful) should be equal to false", () => {
    let actual = caesar("thinkful")
    let expected = false
    expect(actual).to.be.equal(expected)
  })

  it("(thinkful, 99) should be equal to false", () => {
    let actual = caesar("thinkful", 99)
    let expected = false
    expect(actual).to.be.equal(expected)
  })

  it("(thinkful, -26) should be equal to false", () => {
    let actual = caesar("thinkful", -26)
    let expected = false
    expect(actual).to.be.equal(expected)
  })

  it("ignores capital letters", () => {
    const message = "A Message";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "d phvvdjh";

    expect(actual).to.equal(expected);
  })

  it("should handle shifts that go past the end of the alphabet", () => {
    const message = "zebra magazine";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "cheud pdjdclqh";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is before and after encoding", () => {
    const message = "a message.";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "d phvvdjh.";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is before and after decoding", () => {
    const message = "d phvvdjh.";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "a message.";

    expect(actual).to.equal(expected);
  });

  it("(thinkful, 3) should be equal to wklqnixo", () => {
    let actual = caesar("thinkful", 3)
    let expected = "wklqnixo"
    expect(actual).to.be.equal(expected)
  });

  it("(thinkful, -3) should be equal to qefkhcri", () => {
    let actual = caesar("thinkful", -3)
    let expected = "qefkhcri"
    expect(actual).to.be.equal(expected)
  })

  it("(wklqnixo, 3, false) should be equal to thinkful", () => {
    let actual = caesar("wklqnixo", 3, encode = false)
    let expected = "thinkful"
    expect(actual).to.be.equal(expected)
  })

  it("(This is a secret message!, 8) should be equal to bpqa qa i amkzmb umaaiom!", () => {
    let actual = caesar("This is a secret message!", 8)
    let expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.be.equal(expected)
  })

  it("(BPQA qa I amkzmb umaaiom!, 8, false) should be equal to this is a secret message!", () => {
    let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    let expected = "this is a secret message!"
    expect(actual).to.be.equal(expected)
  })

});


