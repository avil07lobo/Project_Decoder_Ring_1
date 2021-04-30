// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionCipher", () => {
    it("(thinkful, short), substitution alphabet isn't exactly 26 characters long, then should be equal to false", () => {
        let actual = substitution("thinkful", "short")
        let expected = false
        expect(actual).to.be.equal(expected)
    })

    it("(thinkful, xoyqmcgrukswaflnthdjpzibev) should be equal to jrufscpw", () => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        let expected = "jrufscpw"
        expect(actual).to.be.equal(expected)
    })

    it("(thinkful, abcabcabcabcabcabcabcabcyz) should be equal to false", () => {
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        let expected = false
        expect(actual).to.be.equal(expected)
    })

    it("(You are an excellent spy, xoyqmcgrukswaflnthdjpzibev) should be equal to elp xhm xf mbymwwmfj dne", () => {
        let message = "You are an excellent spy"
        let actual = substitution(message, "xoyqmcgrukswaflnthdjpzibev")
        let expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.be.equal(expected)
    })

    it("(jrufscpw, xoyqmcgrukswaflnthdjpzibev, false) should be equal to thinkful", () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        let expected = "thinkful"
        expect(actual).to.be.equal(expected)
    })

    it("(message, $wae&zrdxtfcygvuhbijnokmpl) should be equal to y&ii$r&", () => {
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        let expected = "y&ii$r&"
        expect(actual).to.be.equal(expected)
    })
    
    it("(y&ii$r&, $wae&zrdxtfcygvuhbijnokmpl, false) should be equal to message", () => {
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        let expected = "message"
        expect(actual).to.be.equal(expected)
    })
})