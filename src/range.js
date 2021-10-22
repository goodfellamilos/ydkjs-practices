module.exports = function range(start, end) {
  const getRange = (start, end) => {
    const result = [];

    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    return result;
  }

  if (typeof end != "undefined") {
    return getRange(start, end);
  }

  return function getEnd(end) {
    return getRange(start, end);
  }
}
