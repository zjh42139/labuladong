const map = new Map()
for (const item of 'abcc') {
  console.log(item);
  map.set(item, map.has(item) ? map.get(item) + 1 : 1)
}
console.log(map);
console.log('abc'.split('').every(item => {
  return item !== 'd'
}));
console.log(map);
for (const item of map) {
  console.log("🚀 ~ file: test.js ~ line 12 ~ item", item[0])
}
console.log(map.get('a'));
console.log(map.values());