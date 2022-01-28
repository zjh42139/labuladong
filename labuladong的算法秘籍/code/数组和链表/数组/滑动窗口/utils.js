function slidingWindow(s, t) {
  const need = new Map(), win = new Map() // window
  for (const item of t) {
    need.set(item, need.has(item) ? need.get(item) + 1 : 1)
  }
  let left = 0, right = 0
  let valid = 0
  while (right < s.size()) {
    // c 是将移⼊窗⼝的字符
    let c = s[right]
    // 右移窗⼝
    right++;
    // 进⾏窗⼝内数据的⼀系列更新
    // ...

    /*** debug 输出的位置 ***/
    printf("window: [%d, %d)\n", left, right);
    console.log(`window: [${left},${right}]\n`);
    /********************/

    // 判断左侧窗⼝是否要收缩
    // while (win needs shrink) {
    //   // d 是将移出窗⼝的字符
    //   let d = s[left]
    //   // 左移窗口
    //   left++
    //   // 进行窗口内数据的一系列更新
    //   ...
    // }
  }
}