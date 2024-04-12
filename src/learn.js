let array = [1, 2, 3, 4, 5, 6, 7, 8];
let spling = array.slice(1, 5);
console.log(array, spling);
function Name(key) {
  switch (key) {
    case 1:
      return "i am sivasurya";
    default:
      return "none";
  }
}
let fun = Name(1);
// console.log(fun);
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
