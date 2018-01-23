/* eslint-disable */
import { ArrayHelper } from './utils';

describe('renders without crashing', () => {
  test('renders without crashing', () => {
    const min = 5;
    const max = 20;

    expect(ArrayHelper.clampRange(200, min, max)).toBe(max);
    expect(ArrayHelper.clampRange(-20, min, max)).toBe(min);
  })
});
