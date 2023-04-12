export class InterleaveStrings {
    private charsPopped: string;
    private stringWithCharactersPopped: string;
    private interleavedString: string;

    constructor() {
        this.charsPopped = "";
        this.stringWithCharactersPopped = "";
        this.interleavedString = "";
    }

    /**
     * Returns the longest string from a set of strings or
     * "none" if all strings are of same length
     *
     * @throws {RangeError} If the input array contains less than two strings
     * @param {...Array<string>} strings - The array of strings to search
     * @returns {string} The longest string from the input array or "none"
     */
    private getLongestStringFromASetOfStrings(...strings: Array<string>): string {
        let longestString = "";
        let longestStringLength = 0;

        if(strings.length < 2) throw new RangeError("Expected string list to have at least two strings");

        // Check if all the strings in the input array have the same length
        if(strings.every(value => value.length === strings.at(0)!.length)) return "none";

        strings.forEach(value => {
            if(value.length > longestStringLength) {
                longestString = value;
                longestStringLength = value.length;
            }
        });

        return longestString;
    }

    /**
     * Pops characters from the end of the original string until its length matches the target length
     * @param originalString The original string
     * @param targetLength The target length
     */
    private popCharsUntilLengthMatches(originalString: string, targetLength: number) {
        let charsPopped: Array<string> = [];
        let originalStringSplitted = originalString.split("");

        while(originalStringSplitted.length > targetLength) {
            charsPopped.push(originalStringSplitted.pop()!);
        }

        this.charsPopped = charsPopped.join("");
        this.stringWithCharactersPopped = originalStringSplitted.join("");
    }

    /**
     * Interleaves two strings, removing characters from the longer string if necessary
     * @param first The first string
     * @param second The second string
     */
    generateStringInterleavingTwoStrings(first: string, second: string) {
        let times = 0;
        let longestString = this.getLongestStringFromASetOfStrings(first, second);
        const interleavedString: Array<string> = [];

        if(longestString !== "none") {
            if(longestString === first) {
                this.popCharsUntilLengthMatches(longestString, second.length);
                first = this.stringWithCharactersPopped;
            }
            else {
                this.popCharsUntilLengthMatches(longestString, first.length);
                second = this.stringWithCharactersPopped;
            }
        }

        times = first.length;

        for(let i = 0; i < times; i++) {
            interleavedString.push(first[i]);
            interleavedString.push(second[i]);
        }

        this.interleavedString = interleavedString.join("");
    }

    /**
     * Gets the interleaved string with any removed characters appended to the end
     * @returns The interleaved string with any removed characters appended to the end
     */
    getInterleavedStringWithCharactersAppended() {
        return this.interleavedString.concat(this.charsPopped);
    }
}
