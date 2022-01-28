/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const win = new Map() // window
  let left = 0, right = 0
  let len = 0
  while (right < s.length) {
    // c 是将移⼊窗⼝的字符
    let c = s[right]
    // 右移窗⼝
    right++;
    // 进⾏窗⼝内数据的⼀系列更新
    win.set(c, win.has(c) ? win.get(c) + 1 : 1)
    // 判断左侧窗⼝是否要收缩
    while (win.get(c) > 1) {
      // d 是将移出窗⼝的字符
      let d = s[left]
      // 左移窗口
      left++
      // 进行窗口内数据的一系列更新
      win.set(d, win.get(d) - 1)
    }
    len = Math.max(right - left, len)
  }
  return len
};
// const s = "abcabcbb"
// 输出: 3 
// const s = "bbbbb"
// 输出: 1
const s = "pwwkew"
// 输出: 3
// const s = " "
console.log(lengthOfLongestSubstring(s));