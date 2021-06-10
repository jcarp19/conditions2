let name1 = "Raymond";
let name2 = "Charles";
let name3 = "William";

let x = name1.length;
let y = name2.length;
let z = name3.length;

// WHAT ARE THE 7 SCENARIOS?
// 1. x is larger than y & z
// 2. y is larger than x & z
// 3. z is larger than x & y
// 4. x & y are the same length and are larger than z
// 5. x & z are the same length and larger than y
// 6. y & z are the same length and larger than x
// 7. x & y & z are the same

if (x > y && x > z) {
  console.log(name1 + " has the largest name");
} else if (y > x && y > z) {
  console.log(name2 + " has the largest name");
} else if (z > x && z > y) {
  console.log(name3 + " has the largest name");
} else if (x === y && x > z) {
    console.log(name1 + " and " + name2  + " have the largest names")
} else if (x === z && x > y) {
    console.log(name1 + " and " +  name3  + " have the largest names");
} else if (y === z && y > x) {
    console.log(name2 + " and " +  name3  + " have the largest names");
} else {
    console.log(name1 + ", " + name2 + ", and " + name3 + " have the same length");
}
