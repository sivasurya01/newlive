// let arrrays = [1, 2, 3, 4, "5"];
// // for (let i = 0; i < arrrays.length; i++) {
// //   if (i != typeof String) {
// //     console.log(i);
// //   }
// // }
// let find = arrrays.find((data) => data > 3);
// console.log(find);
// let filter = arrrays.filter((data) => data < 4);
// console.log(filter);
// let map = arrrays.map((data) => data * 2);
// console.log(map);
// let reduce = arrrays.reduce((acc, cur) => {
//   return +acc + +cur;
// }, []);
// console.log(reduce);
// let obj = {
//   1: "one",
//   2: "two",
//   3: "three",
// };
// console.log(obj["2"]);
// let at = arrrays.at(2);
// console.log(at);
// let push = arrrays.push(6);
// console.log(push, arrrays);
// let shift = arrrays.shift();
// console.log(shift, arrrays);
// let unshift = arrrays.unshift(2);
// console.log(unshift, arrrays);
// let pop = arrrays.pop();
// console.log(pop, arrrays);
// let splice = arrrays.splice(0, 2, 9);
// console.log(splice, arrrays);
// let slice = arrrays.slice(1, 4);
// console.log(slice, arrrays);

// let names = "siva";
// let some = [1, 2, 4];
// let res = (7 * 8) / 2 - 8;
// function findMissingNumber(arr) {
//   // Calculate the length of the array if it had no missing number
//   const n = arr.length + 1;

//   // Calculate the expected sum of the first n natural numbers
//   const expectedSum = (n * (n + 1)) / 2;

//   // Calculate the actual sum of the given array
//   const actualSum = arr.reduce((acc, num) => acc + num, 0);

//   // The missing number is the difference between the expected sum and the actual sum
//   const missingNumber = expectedSum - actualSum;

//   return missingNumber;
// }

// console.log(findMissingNumber(some));
function findDuplicateLetters(word) {
  // Create an object to store the frequency of each character
  let obj = {};
  for (const iterator of word) {
    if (obj[iterator]) {
      console.log(obj[iterator]++, obj);
      obj[iterator]++;
    } else {
      obj[iterator] = 1;
    }
  }
  let duplicate = [];
  for (const key in obj) {
    if (obj[key] > 1) {
      duplicate.push(key);
    }
  }
  return duplicate;
}

console.log(findDuplicateLetters("sivasurya"));

const zeroarrray = [1, 0, 3, 2, 0, 4, 0, 5];
function takeValues(arr) {
  let result;
  let nums = [];
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      nums.push(arr[i]);
    } else {
      zeros.push(arr[i]);
    }
  }
  return nums.concat(zeros);
}
console.log(takeValues(zeroarrray));
