class BacEngine {
  /** Total in cl
   *
   * @param total
   * @param proof
   * @returns {number}
   */
  static convertToPureAlcohol = (total, proof) => ((total * 10) * (proof / 100));

  static calculateSingleBac = bacData => {
    const {
      hoursFromConsumption, consumptionInGrams, bodyWeightInGrams, genderConstant, burndown,
    } = bacData;
    const calculatedBac = ((consumptionInGrams / (bodyWeightInGrams * genderConstant)) * 100) - (burndown * hoursFromConsumption);
    return Math.max(0, calculatedBac);
  };
}

export default BacEngine;
