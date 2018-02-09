/* eslint-disable */
import React from 'react';
import BacEngine from './bacEngine';

describe('calculates correct values', () => {
  test('calculates correct grams of alcohol', () => {
    const amountInCl = 14;
    const proofInPercentage = 12;
    const calculatedAlcoholInGrams = BacEngine.convertToPureAlcohol(amountInCl, proofInPercentage);
    expect(calculatedAlcoholInGrams).toBe(16.8);
  })
});
