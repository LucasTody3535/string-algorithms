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
        if(!strings.every(value => value.length === strings.at(0)!.length)) return "none";

        strings.forEach(value => {
            if(strings.length > longestStringLength) {
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
    }
}
