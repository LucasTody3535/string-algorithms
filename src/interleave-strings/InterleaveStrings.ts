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
