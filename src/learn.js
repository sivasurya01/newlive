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
do {
  console.log("yes");
} while (array.length == 10);
let day = 31;
for (let index = 0; index <= day; index++) {
  const element = index;
  console.log(element);
}
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 2));
function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

console.log(factorial(5));
let month = {
  1: "janury",
  2: "febrary",
  3: "march",
  4: "aprll",
};
console.log(month[3]);
