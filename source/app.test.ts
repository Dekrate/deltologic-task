// Importuj funkcję trap z odpowiedniego pliku

import trap from "./utils";

describe('trap function tests', () => {
    it('should return 0 for an empty array', () => {
        const result = trap([3, 2, 4, 1, 2]);
        expect(result).toEqual(2);
    });

    it('should return 0 for an array with one element', () => {
        const result = trap([4, 1, 1, 0, 2, 3]);
        expect(result).toEqual(8);
    });
});
