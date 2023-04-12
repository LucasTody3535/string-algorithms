import { InterleaveStrings } from "../../src/interleave-strings/InterleaveStrings";

describe("Interleave Strings Tests", () => {

    let stringInterleaver!: InterleaveStrings;

    beforeEach(() => {
        stringInterleaver = new InterleaveStrings();
    });

    it("Should interleave \"abc\" with \"123\" resulting in \"a1b2c3\"", () => {
        const textOne = "abc";
        const textTwo = "123";
        const expected = "a1b2c3";

        stringInterleaver.generateStringInterleavingTwoStrings(textOne, textTwo);

        expect(stringInterleaver.getInterleavedStringWithCharactersAppended()).toBe(expected);
    });
});
