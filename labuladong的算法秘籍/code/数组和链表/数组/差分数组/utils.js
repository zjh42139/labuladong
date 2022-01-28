// 差分数组工具类
class Difference {
  diff = []
  constructor(nums) {
    this.diff = new Array(nums.length)
    // 构建差分数组
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }
  // [i...j] + val
  increment(i, j, val) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }
  }
  // 结果数组
  result() {
    const res = new Array(this.diff.length)
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i]
    }
    return res
  }
}
module.exports = {
  Difference
}