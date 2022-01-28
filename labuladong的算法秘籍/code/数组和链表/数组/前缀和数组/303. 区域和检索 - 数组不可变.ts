class NumArray {
  private preSums: number[];
  constructor(nums: number[]) {
    this.preSums = new Array(nums.length + 1);
    this.preSums[0] = 0;
    // preSums[i] 为nums中前i-1个数之和
    for (let i = 1; i < this.preSums.length; i++) {
      this.preSums[i] = this.preSums[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.preSums[right + 1] - this.preSums[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
const nums = [-2, 0, 3, -5, 2, -1];
const obj = new NumArray(nums);
console.log(obj.sumRange(0, 5));

export {};
