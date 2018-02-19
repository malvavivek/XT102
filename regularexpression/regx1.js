let re;
re=/nitro/ig;//i make nitro testing case insensitive,g is for global
console.log(typeof re);
console.log(re instanceof RegExp);

// console.log(re.source);
// const result = re.exec('bagmane sapient nitro');
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);
const result = re.test('bagmane sapient Nitro');//returns true if nitro is found else false
console.log(result);

const str = 'sapient nitro';
//const result1=str.match(re);
const result1=str.search(re);

console.log(result1);