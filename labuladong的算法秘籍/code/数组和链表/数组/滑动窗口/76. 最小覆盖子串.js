/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const need = new Map(), win = new Map() // window
  for (const item of t) {
    need.set(item, need.has(item) ? need.get(item) + 1 : 1)
  }
  let left = 0, right = 0
  let valid = 0
  let start = 0, len = Infinity
  while (right < s.length) {
    // c 是将移⼊窗⼝的字符
    let c = s[right]
    // 右移窗⼝
    right++;
    // 进⾏窗⼝内数据的⼀系列更新
    // ...
    if (need.get(c)) {
      win.set(c, win.has(c) ? win.get(c) + 1 : 1)
      if (win.get(c) === need.get(c)) {
        valid++
      }
    }
    // 判断左侧窗⼝是否要收缩
    while (valid === need.size) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      // d 是将移出窗⼝的字符
      let d = s[left]
      // 左移窗口
      left++
      // 进行窗口内数据的一系列更新
      // ...
      if (need.get(d)) {
        if (win.get(d) === need.get(d)) valid--
        win.set(d, win.get(d) - 1)
      }
    }
  }
  return len === Infinity ? '' : s.slice(start, start + len)
};
const s = "ADOBECODEBANC", t = "ABC"
// const s = "a", t = "a"
// const s = "a", t = "aa"
// const s = 'ab', t = 'a'
console.log(minWindow(s, t));