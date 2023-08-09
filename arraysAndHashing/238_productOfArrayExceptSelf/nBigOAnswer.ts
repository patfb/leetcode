// https://leetcode.com/problems/product-of-array-except-self/description/

const leftToRightMultiplication = (inputArray: number[]) => {
  const productsArray: number[] = [];

  inputArray.forEach((value, index) => {
    // if this is the first item then there is no previous so just return 1 so we can multiple 1 by the current value and get the current value
    const previousValue = index === 0 ? 1 : productsArray.at(-1);

    // console.log(
    //   `index: ${index}, value: ${value}, previousProduct: ${previousValue}, typeOf previous: ${typeof previousValue}`,
    // );

    productsArray.push(value * previousValue);
  });

  return productsArray;
};

const rightToLeftMultiplication = (inputArray: number[]) => {
  const inputArrayReversed = inputArray.reverse(); // reverse this array so we can loop over it 'backwards'
  const productsArray = leftToRightMultiplication(inputArrayReversed);
  // now that we've looped over the array backwards our resulting products array is backwards
  // we need to reverse the products array so that it's forwards (as if we had looped through inital array backwards instead of reversing
  // the array and looping through it forwards)
  return productsArray.reverse();
};

const productExceptSelf = (nums: number[]): number[] => {
  // console.log("original array", nums);
  const prefixProducts = leftToRightMultiplication(nums);
  const postfixProducts = rightToLeftMultiplication(nums);

  // console.log("prefixProducts", prefixProducts);
  // console.log("postfixProducts", postfixProducts);

  const productsExceptSelf = nums.map((_value, index) => {
    const prefixProduct = index === 0 ? 1 : prefixProducts.at(index - 1);

    const postfixProduct =
      index + 1 === postfixProducts.length ? 1 : postfixProducts.at(index + 1);

    // console.log(
    //   `for index: ${index}, prefixProduct: ${prefixProduct}, postfixProduct: ${postfixProduct}`,
    // );

    return prefixProduct * postfixProduct;
  });

  return productsExceptSelf;
};

// console.log("productsExceptSelf is", productExceptSelf([1, 2, 3, 4]));
