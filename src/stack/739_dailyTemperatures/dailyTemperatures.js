// time limit exceeded on this implementation

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const tempsIndexed = temperatures.map((value, index) => ({
    value,
    index,
  }));

  const result = temperatures.map((currentTemperature, currentIndex) => {
    const futureDays = tempsIndexed.slice(currentIndex + 1);

    const hotterDay = futureDays.find(
      (tempIndexed) =>
        tempIndexed.index > currentIndex &&
        tempIndexed.value > currentTemperature,
    );

    if (hotterDay === undefined) return 0;

    return hotterDay.index - currentIndex;
  });

  return result;
};

export { dailyTemperatures };
