// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybiusCipher", () => {
    it("(thinkful) should be equal to 4432423352125413 and translates i/j to 42", () => {
        let actual = polybius("thinkful")
        let expected = "4432423352125413"
        expect(actual).to.be.equal(expected)
    })

    it("(4432423352125413, false) should be translate to th(i/j)nkful", () => {
        let actual = polybius("4432423352125413", false)
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    })

    it("(Hello world) should be 3251131343 2543241341 and ignores capital letters", () => {
        const message = "Hello world";
        const actual = polybius(message);
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
    })

    it("(3251131343 2543241341, false) should be equal to hello world and leaves spaces as is", () => {
        let actual = polybius("3251131343 2543241341", false)
        let expected = "hello world"
        expect(actual).to.be.equal(expected)
    })

    it("(44324233521254134, false), since length is odd number, should be equal to false", () => {
        let actual = polybius("44324233521254134", false)
        let expected = false
        expect(actual).to.be.equal(expected)
    })
})