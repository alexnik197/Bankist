// 'use strict';

// // ---------- CHALLENGE #1 ----------

// // DATA1
// const Julia1 = [3, 5, 2, 12, 7];
// const Kate1 = [4, 1, 15, 8, 3];

// // DATA2
// const Julia2 = [9, 16, 6, 8, 3];
// const Kate2 = [10, 5, 6, 1, 4];

// // CORRECTED ARRAYS
// const JuliaCorrected = [...Julia1.slice(1, -2), ...Julia2.slice(1, -2)];
// const KateData = [...Kate1, ...Kate2];

// const checkDogs = function (dogsJulia, dogsKate) {
//   console.log(`---------- Julia's dogs ----------`);
//   dogsJulia.forEach(function (dogYear, i) {
//     if (dogYear >= 3) {
//       console.log(
//         `Julia's Dog number ${
//           i + 1
//         } is an adult 🐕‍🦺, and is ${dogYear} years old`
//       );
//     } else {
//       console.log(
//         `Julia's Dog number ${i} is still puppy 🐶. ${dogYear} years old`
//       );
//     }
//   });
//   console.log(`---------- Kate's dogs ----------`);
//   dogsKate.forEach(function (dogYear, i) {
//     if (dogYear >= 3) {
//       console.log(
//         `Kate's Dog number ${i + 1} is an adult 🐕‍🦺, and is ${dogYear} years old`
//       );
//     } else {
//       console.log(
//         `Kate's Dog number ${i} is still puppy 🐶. ${dogYear} years old`
//       );
//     }
//   });
// };

// // checkDogs(JuliaCorrected, KateData);

// // ---------- CHALLENGE #2 ----------
// const Data1 = [5, 2, 4, 1, 15, 8, 3];
// const Data2 = [16, 6, 10, 5, 6, 1, 4];

// // --- #1 ---
// const calcAge = function (array) {
//   const dogAgeToHuman = array.map((age, i) => {
//     console.log(
//       `Dog № ${i + 1}: ${age} years old. His human age is ${age * 7}`
//     );
//     if (age <= 2) return age * 2;
//     else return age * 4 + 16;
//   });

//   // console.log(`Dog age: ${array}`);
//   // console.log(`Human age: ${dogAgeToHuman}`);

//   // --- #2 --- Dogs older or equals 18 years old
//   const adultDog = dogAgeToHuman
//     .filter(age => age >= 18)
//     .reduce((acc, cur) => (acc + cur) / dogAgeToHuman.length, 0);

//   console.log(`Average age: ${adultDog.toFixed(2)}`);
// };

// console.log(`DATA 1`);
// calcAge(Data1);

// console.log(`DATA 2`);
// calcAge(Data2);
