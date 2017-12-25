import { isEqualArrays } from '../src/array';

describe('isEqualArrays', () => {
  it('returns true if both arrays are identical', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const arr3 = [1, 2, '3'];
    const arr4 = [3, 2, 1];
    const arr5 = [{ foo: 'bar' }];
    const arr6 = [{ foo: 'bar' }];
    // needs to be identical
    expect(isEqualArrays(arr1, arr2)).toBe(true);
    // consider type
    expect(isEqualArrays(arr1, arr3)).toBe(false);
    // consider order
    expect(isEqualArrays(arr1, arr4)).toBe(false);
    // Only does shallow comparison, objects are not counted
    expect(isEqualArrays(arr5, arr6)).toBe(false);
  });
});
