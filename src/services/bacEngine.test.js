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
    const genderConstant = 0.68;
    const burndown = 0.15;
    const bodyWeight = 85;
    const age = 37;
    const consumptionIngrams = 16.8;
    const hoursFromConsumption = 0.25;

    const currentBac = BacEngine.calculateBac(hoursFromConsumption, consumptionIngrams, bodyWeight, age, genderConstant, burndown);
    const roundedBac = Math.round(currentBac * 10000)  / 10000;

    expect(roundedBac).toBe(0.2532);
  })
});
