class ArrayHelper {
  static clampRange = (value, min, max) => (Math.min(Math.max(value, min), max));
  static loopRange = (value, min, max) => {
    if ((value > max || value < min)) {
      return (value > max) ? min : max;
    }
    return value;
  }
}

export {
  ArrayHelper,
};
