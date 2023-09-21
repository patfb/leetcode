/*
https://leetcode.com/problems/arranging-coins/
Runtime 368ms beats 5.81% of users with TypeScript
Memory 81.06MB beats 5.81% of users with TypeScript
*/

const arrangeCoins = (n: number): number => {
  const recursiveCreateStair = ({
    step,
    coins,
  }: {
    step: number;
    coins: number;
  }) => {
    if (coins <= 0) return step - 1; // we couldn't complete this step so return the last completed which is the previous

    const coinsToCreateThiseStep = step + 1;
    const coinsRemaining = coins - coinsToCreateThiseStep;

    return recursiveCreateStair({ step: step + 1, coins: coinsRemaining });
  };

  const completedSteps = recursiveCreateStair({ step: 1, coins: n });
  return completedSteps;
};

console.log("arrangeCoins", arrangeCoins(1));
