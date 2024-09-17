var twoSum = function (nums, target) {
  let output = [];
  let i = 0;
  let j;
  for (i; i < nums.length; i++) {
    j = i + 1;
    for (j; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i);
        output.push(j);
      }
    }
  }
  return output;
};
const nums = [3, 2, 4];
const target = 6;
const outp = twoSum(nums, target);
console.log(outp);
