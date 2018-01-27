/* eslint-disable */
import { ArrayHelper } from './utils';

describe('Testing ArrayHelper:', () => {
  test('claming withing a range works', () => {
    const min = 5;
    const max = 20;

    expect(ArrayHelper.clampRange(200, min, max)).toBe(max);
    expect(ArrayHelper.clampRange(-20, min, max)).toBe(min);
  })

  test('looping forward works', () => {
    const min = 5;
    const max = 20;

    expect(ArrayHelper.loopRange(21, min, max)).toBe(min);
  })

  test('looping backwards works', () => {
    const min = 5;
    const max = 20;

    expect(ArrayHelper.loopRange(4, min, max)).toBe(max);
  })
});
