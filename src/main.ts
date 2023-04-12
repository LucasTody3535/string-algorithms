import { InterleaveStrings } from "./interleave-strings/InterleaveStrings";

const stringInterleaver = new InterleaveStrings();

console.clear();
console.log();

console.log("------------- ALGORITHM TO INTERLEAVE STRINGS -------------");

console.log();

console.log(`Interleaving two strings
Inputs: "abc", "123"
Expected Output: a1b2c3`);
stringInterleaver.generateStringInterleavingTwoStrings("abc", "123");
console.log(`Actual Output:   ${stringInterleaver.getInterleavedStringWithCharactersAppended()}`);

console.log("\n------------- Another Case -------------\n");

console.log(`Interleaving two strings with different lengths
Input: "abc", "1234"
Expected Output: a1b2c34`);
stringInterleaver.generateStringInterleavingTwoStrings("abc", "1234");
console.log(`Actual Output:   ${stringInterleaver.getInterleavedStringWithCharactersAppended()}`);

console.log();
