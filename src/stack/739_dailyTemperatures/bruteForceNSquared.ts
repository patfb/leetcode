const dailyTemperatures = (temps: number[]): number[] => {
  const originalTemps = temps.map((temp, index) => ({
    temp,
    index,
  }));

  const tempsWithIndices = [...originalTemps];

  const result = tempsWithIndices.map((today) => {
    const firstWarmerDay = originalTemps.find(
      (originalTemp) =>
        originalTemp.temp > today.temp && originalTemp.index > today.index,
    );

    if (firstWarmerDay === undefined) return 0; // we couldn't find a warmer day
    return firstWarmerDay.index - today.index; // index diff between warmer day and today
  });

  return result;
};

console.log("daily temperatures", dailyTemperatures([30, 60, 90]));

export {};
