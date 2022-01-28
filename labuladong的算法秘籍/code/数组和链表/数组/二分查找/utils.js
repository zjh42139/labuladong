function binarySearch(nums, target) {
  let left = 0
  // let right = ...
  while (left < right) {
    let mid = left + (right - left) / 2
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return -1
}