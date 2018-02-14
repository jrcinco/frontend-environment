import { expect } from 'chai';
import { add } from '../src/js/add';

describe('Adding 2 numbers', () => {
    it('Should return 3 when adding 1 + 2', () => {
        const sum = add(1, 2);
        const result = 3;

        expect(sum).to.equal(result);
    });
});