import * as operations from './operations';

const mockdate = require('mockdate');

describe('Testing operations: ', () => {
  describe('filterEntriesLessThan24Hours', () => {
    test('filters correct diary entries', () => {
      mockdate.set(1530819579000);
      // 24 hours in epoch: 86400000
      // Minimum epoch 1444419583000
      const mockDiary = [
        { time: 1530819579000 },
        { time: 1530808779000 },
        { time: 1530702004000 },
      ];

      const expectedResult = [
        { time: 1530819579000 },
        { time: 1530808779000 },
      ];

      expect(operations.filterEntriesLessThan24Hours(mockDiary)).toEqual(expectedResult);
    });
  });
});
