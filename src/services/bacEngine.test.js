/* eslint-disable */
import React from 'react';
import BacEngine from './bacEngine';

const MockDate = require('mockdate');
const moment = require('moment');

describe('calculates correct values', () => {
  test('calculates correct grams of alcohol', () => {
    const amountInCl = 14;
    const proofInPercentage = 12;
    const calculatedAlcoholInGrams = BacEngine.convertToPureAlcohol(amountInCl, proofInPercentage);
    expect(calculatedAlcoholInGrams).toBe(16.8);
  })

  test('calculates correct bac from time of drinking to now', () => {
    const bacData = {
      genderConstant: 0.68, //Male
      burndown: 0.015,
      bodyWeightInGrams: 85000,
      age: 37,
      consumptionInGrams: 16.8,
      hoursFromConsumption: 0.25,
    };

    const currentBac = BacEngine.calculateSingleBac(bacData);
    const roundedBac = Math.round(currentBac * 10000)  / 10000;

    expect(roundedBac).toBe(0.0253);
  })
});
