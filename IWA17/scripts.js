const data = {
  lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
  ]
};

// Only edit below

const [firstArray, secondArray, thirdArray] = data.lists.map(([_, arr]) => arr);

const result = [];

const extractBiggest = () => {
  const firstLast = firstArray.length > 0 ? firstArray[firstArray.length - 1] : -Infinity;
  const secondLast = secondArray.length > 0 ? secondArray[secondArray.length - 1] : -Infinity;
  const thirdLast = thirdArray.length > 0 ? thirdArray[thirdArray.length - 1] : -Infinity;

  if (firstLast >= secondLast && firstLast >= thirdLast) {
    return firstArray.pop();
  } else if (secondLast >= firstLast && secondLast >= thirdLast) {
    return secondArray.pop();
  } else {
    return thirdArray.pop();
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
