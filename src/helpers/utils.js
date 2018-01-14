class ArrayHelper {
  static clampRange = (value, min, max) => (Math.min(Math.max(value, min), max));
}

export {
  ArrayHelper,
};
