/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const preSums = new Array(nums.length + 1).fill(0)

  for (let i = 1; i <= nums.length; i++) {
    preSums[i] = preSums[i - 1] + nums[i - 1]
  }
  let count = 0
  for (let i = 1; i <= nums.length; i++) {
    for (let j = i; j <= nums.length; j++) {
      if (preSums[j] - preSums[i - 1] === k) count++
    }
  }
  return count
};
const subarraySumV2 = function (nums, k) {
  const preSums = new Map()
  preSums.set(0, 1)
  let count = 0
  let sum0_i = 0
  for (let i = 1; i <= nums.length; i++) {
    sum0_i += nums[i - 1]
    let sum0_j = sum0_i - k
    if (preSums.has(sum0_j)) count += preSums.get(sum0_j)
    preSums.set(sum0_i, (preSums.get(sum0_i) ?? 0) + 1)
  }
  return count
};

const nums = [1, -1, 0]
const k = 0
const res = subarraySum(nums, k)
const res2 = subarraySumV2(nums, k)
console.log(res, res2);