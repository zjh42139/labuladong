const { Difference } = require('./utils')
console.log(Difference);
const getModifiedArray = (length, updates) => {
  const nums = new Array(length).fill(0)
  const diff = new Difference(nums)
  updates.forEach((item) => {
    const [startIndex, endIndex, val] = item
    diff.increment(startIndex, endIndex, val)
  })
  return diff.result()
}
const length = 5;
const updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]]
console.log(getModifiedArray(length, updates));