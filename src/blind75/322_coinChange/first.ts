const compareInt = (a: number, b: number) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const coinChange = (coins: number[], amount: number): number => {
  coins.sort(compareInt).reverse();
  console.log("coin length", coins.length);
  console.log("coins", coins);

  const usedCoins = new Map<number, number>(); // coin type, amount

  let amountLeft = amount;

  coins.find((currentCoin, index) => {
    if (amountLeft === 0) {
      console.log("amount left is 0 so stopping");
      return true;
    }

    const wholeCoins = Math.floor(amountLeft / currentCoin);
    const remainderAfterCoin = amountLeft % currentCoin;

    console.log(
      `iteration:${index}, coinToCheck:${currentCoin}, wholeCoins:${wholeCoins}, remainder:${remainderAfterCoin}`,
    );

    if (wholeCoins > 0) {
      usedCoins.set(currentCoin, wholeCoins); // how many whole coins we used
    }

    amountLeft = amountLeft - wholeCoins * currentCoin;

    if (remainderAfterCoin === 0) {
      console.log("no more remainder to deal with so we're done");
      return true;
    }

    return false;
  });

  console.log("amount left", amountLeft);

  if (amountLeft !== 0) return -1; // return -1 to indicate that we can't make change for the given amount with the given coins

  console.log("usedCoins", usedCoins);

  let totalCoins = 0;
  usedCoins.forEach((value, _key) => {
    totalCoins = totalCoins + value;
  });

  return totalCoins;
};

// console.log("coinChange", coinChange([1, 2, 5], 11));
// console.log("coinChange", coinChange([2], 3));
// console.log("coinChange", coinChange([1], 0));
// console.log("coinChange", coinChange([186, 419, 83, 408], 6249)); --> doesn't work with this one
