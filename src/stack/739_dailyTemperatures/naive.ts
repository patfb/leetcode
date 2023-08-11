const sortTemps = (temperature1: any, temperature2: any) => {
  if (temperature1.index < temperature2.index) return -1;
  if (temperature1.index > temperature2.index) return 1;
  return 0;
};

// we might be able to do this like the polish stack where we just burn through our previous stack?

const dailyTemperatures = (temperatures: number[]): number[] => {
  const tempsStillNeedChecking = [];
  const prevTemps = [];

  temperatures.forEach((todaysTemperature, index) => {
    const pastTemperatureItem = {
      temperature: todaysTemperature,
      originalIndex: index,
      daysToWait: 0,
      needsChecking: true,
    };

    if (prevTemps.length) {
      prevTemps.forEach((prevTemp) => {
        if (
          prevTemp.needsChecking &&
          prevTemp.temperature < todaysTemperature
        ) {
          prevTemp.daysToWait = index - prevTemp.originalIndex;
          prevTemp.needsChecking = false;
        }
      });
    }

    prevTemps.push(pastTemperatureItem);
  });

  const sorted = prevTemps.sort(sortTemps);

  return sorted.map(({ daysToWait }) => daysToWait);
};

// console.log(
//   "daily temperatures",
//   dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
// );

export {};
