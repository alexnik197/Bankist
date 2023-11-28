'use strict';

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

// --------------- SIMPLE ARRAY METHODS ---------------

// // --- # SLICE ---
// // --- Slice method doesn't change an original array ---
// const arrSimple = [0, 1, 2, 3, 4, 5, 6];

// console.log(arrSimple.slice(2));
// // - [2, 3, 4, 5, 6];

// console.log(arrSimple.slice(2, 4));
// // - [2, 3,];

// console.log(arrSimple.slice(-1));
// // - [6];

// // --- # SPLICE ---
// // --- Splice method changed an original array ---
// // --- Splice method extracted splice elements ---

// const arrABC = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arrABC.splice(1, 2));
// // - ['b', 'c']

// console.log(arrABC);
// // - ['a', 'b', 'c', 'd', 'e', 'f']

// // --- # REVERSE ---
// // // --- Splice method changed an original array ---

// const myName = 'ALEXIOS';
// const nameLetter = [...myName];
// console.log(nameLetter.reverse());
// // - ['S', 'O', 'I', 'X', 'E', 'L', 'A']

// // // --- # CONCAT ---
// // --- This method will merge the selected arrays
// const [...myFirstName] = 'Alexey';
// const [...mySecondName] = 'Nikiforov';
// const mySurname = myFirstName.concat(mySecondName);
// console.log(mySurname);
// // - ['A', 'l', 'e', 'x', 'e', 'y', 'N', 'i', 'k', 'i', 'f', 'o', 'r', 'o', 'v']

// --- # JOIN ---
// console.log(mySurname.join(' - '));
// - A - l - e - x - e - y - N - i - k - i - f - o - r - o - v

// --- # AT ---
// - for getting last element before we could use only square brackets [-1]
// - But now we can use a modern JS features like this arr.at(-1)

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// console.log(numbers[numbers.length - 1]);
// - [80]

// console.log(numbers.at(-1));
// - [80]

// --- # FOR EACH ---
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let deposites = [];
// let withdrawals = [];

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     deposites.push(mov);
//     console.log(`[${i + 1}] deposite is ${mov}`);
//   } else {
//     withdrawals.push(mov);
//     console.log(`[${i + 1}] withdraw is ${Math.abs(mov)}`);
//   }
// });

// console.log(`My deposits: ${deposites}`);
// console.log(`My witdrawals: ${withdrawals}`);

// ---------- # MAP METHOD ----------
// // [PRACTICE] +++ CONVERT RUB TO USD
// const movRUB = [1000, 2000, 3200, 44000, 66150];
// console.log('1 dollar equal 91 rubles');

// const RUBtoUSD = movRUB.map(function (mov) {
//   return console.log(`${mov} rubles is ${Math.round(mov / 91)} dollars`);
// });

// // [PRACTICE] +++ CONVERT mile TO km
// const maraphoneDistanceKM = [21, 42, 100];
// const maraphoneDistanceMiles = maraphoneDistanceKM.map(function (km) {
//   return console.log(km * 1.61);
// });

// // ---------- FILTER METHOD ----------
// const moneyMov = [200, -60, 400, 426, -359, 666, -523];

// const onlyDeposits = moneyMov.filter(function (mov) {
//   return mov > 0;
// });

// const onlyWithdrawals = moneyMov.filter(function (mov) {
//   return mov < 0;
// });

// console.log(`My deposits: ${onlyDeposits}`);
// console.log(`My withdrawals: ${onlyWithdrawals}`);

// const depositsFor = [];

// // It'l be equal for method. But by more easy way
// for (const movNew of moneyMov) if (movNew > 0) depositsFor.push(movNew);
// console.log(depositsFor);

// // ---------- REDUCE METHOD ----------
// const moneyMov = [200, -60, 400, 426, -359, 666, -523];

// const balance = moneyMov.reduce(function (acc, cur, i) {
//   console.log(`Iteration №:${i + 1} current movement:${cur} sum:${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// // HOW TO GET A MAXIMUM VALUE
// const movementMax = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(`Max movement: ${movementMax}`);

// // // ---------- FIND METHOD ----------
// // FIND METHOD FIND THE FIRST ELEMENT EQUALS THE CONDITION

// const moneyMov = [200, 300, -60, 400, 426, -359, 666, -523];
// const firstNegative = moneyMov.find(mov => mov < 0);
// const firstPositive = moneyMov.find(mov => mov > 0);

// console.log(firstNegative);
// console.log(firstPositive);

// const newAcc = accounts.find(acc => acc.owner === 'Jonas Schmedtmann');
// console.log(newAcc);
