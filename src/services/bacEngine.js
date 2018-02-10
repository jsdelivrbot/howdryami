class BacEngine {
  /** Total in cl
   *
   * @param total
   * @param proof
   * @returns {number}
   */
  static convertToPureAlcohol = (total, proof) => ((total * 10) * (proof / 100));

  static calculateBac = (hoursFromConsumption, amountDrunk, bodyWeight, age, genderConstant, burndown) => (
    amountDrunk / (bodyWeight * genderConstant)) - (burndown * hoursFromConsumption
    )
}

export default BacEngine;
