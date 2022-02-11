// 父节点的索引
function parent(root) {
  return root / 2;
}
// 左孩子的索引
function left(root) {
  return root * 2;
}
// 右孩子的索引
function right(root) {
  return root * 2 + 1;
}
class MaxPQ {
  // 存储元素的数组
  pq = [];
  // 当前 priority queue 中的元素个数
  N = 0;
  constructor(cap) {
    this.pq = new Array(cap + 1);
  }
  max() {
    return this.pq[1];
  }
  insert(e) {
    this.N++;
    this.pq[this.N] = e;
    this.swim(this.N);
  }
  delMax() {
    const max = this.pq[1];
    this.exchange(1, this.N);
    this.pq[this.N] = null;
    this.N--;
    this.sink(1);
    return max;
  }
  // 下浮第 k 个元素 以维护最大堆性质
  swim(k) {
    while (k > 1 && this.less(parent(k), k)) {
      this.exchange(parent(k), k);
      k = parent(k);
    }
  }
  // 下沉第 k 个元素 以维护最大堆性质
  sink(k) {
    while (left(k) <= this.N) {
      let older = left(k);
      if (right(k) <= this.N && this.less(older, right(k))) {
        older = right(k);
      }
      if (this.less(older, k)) break;
      this.exchange(k, older);
      k = older;
    }
  }
  exchange(i, j) {
    [this.pq[j], this.pq[i]] = [this.pq[i], this.pq[j]];
  }
  less(i, j) {
    return this.pq[i] < this.pq[j];
  }
}

export { MaxPQ };
