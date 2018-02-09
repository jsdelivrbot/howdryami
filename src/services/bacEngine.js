class BacEngine {
  /** Total in cl
   *
   * @param total
   * @param proof
   * @returns {number}
   */
  static convertToPureAlcohol = (total, proof) => {
    return (total * 10) * proof / 100;
  }
}

export default BacEngine;
