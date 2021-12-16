const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;
    memo[remainder] = canSum(remainder, numbers, memo)
		if (memo[remainder] === true) {
			return true;
		}
	}

	return false;
};

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
