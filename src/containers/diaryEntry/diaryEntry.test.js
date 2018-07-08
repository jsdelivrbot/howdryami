/* eslint-disable */
import React from 'react';
import { TestDiaryEntry } from './diaryEntry';

describe('renders without crashing', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(
      <TestDiaryEntry
        history={{}}
        saveDiaryEntry={() => {}}
        drinkList={[]}
        drinkLibrary={[]}
        selectedDrink=""
        formDiaryEntry={{}}
      />
    );
  })
});
