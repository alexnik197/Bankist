'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const btnReg = document.querySelector('.registration');
const btnExit = document.querySelector('.logOff');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const typeBalance = document.querySelector('.balance__type');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const currencyType = {
  rub: '₽',
  usd: '$',
  eur: '€',
};

let currentAcc;

// ---------- REGISTRATION ACCOUNT FUNCTION ----------
btnReg.addEventListener('click', function (e) {
  e.preventDefault();

  const newAccount = {};
  const prefix = accounts.length + 1;
  newAccount[prefix];

  const createAcc = function (newAcc) {
    newAcc.owner = prompt('Type your first and second name');
    newAcc.movements = [];
    newAcc.interestRate = (Math.random() * (1.5 - 0.5) + 0.5).toFixed(2);
    newAcc.pin = Number(prompt('Type your pin (Only 4 digits)'));
  };
  createAcc(newAccount);

  accounts.push(newAccount);

  toInit(accounts);

  alert(
    `Account created! Your login: ${newAccount.initials}. Your PIN: ${newAccount.pin}`
  );
});

// ---------- LOGIN ----------
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  btnReg.style.display = 'none';
  btnExit.style.display = 'block';
  const userLog = inputLoginUsername.value.toLocaleLowerCase();
  const userPin = Number(inputLoginPin.value);

  currentAcc = accounts.find(
    acc => userLog === acc.initials && userPin === acc.pin
  );

  // CLEAR LOGIN AND PIN
  inputLoginUsername.value = '';
  inputLoginPin.value = '';

  if (currentAcc) {
    labelWelcome.textContent = `Welcome ${currentAcc.owner.split(' ')[0]}!`;
    containerApp.style.opacity = 100;
  }

  // -----------------------------------------------------
  // -----------------------------------------------------

  // 1. SHOW MOVEMENTS FUNCTION
  const showMov = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movSort = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movSort.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const htmlMov = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
        <div class="movements__value">${mov} ${currencyType.rub}</div>`;
      containerMovements.insertAdjacentHTML('afterbegin', htmlMov);
    });
  };

  // 2. SHOW CURRENT BUDGET FUNCTION
  const showBalance = function (acc) {
    acc.balance = acc.movements.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);

    labelBalance.textContent = acc.balance;
    typeBalance.textContent = currencyType.rub;
  };

  // 3. SHOW IN BALANCE FUNCTION
  const showIN = function (movements) {
    const displayIn = movements
      .filter(mov => mov > 0)
      .reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = `${displayIn}${currencyType.rub}`;
  };

  // 4. SHOW OUT BALANCE FUNCTION
  const showOUT = function (movements) {
    const displayOut = movements
      .filter(mov => mov < 0)
      .reduce((acc, cur) => acc + cur, 0);
    labelSumOut.textContent = `${Math.abs(displayOut)}${currencyType.rub}`;
  };

  // 5. SHOW INTEREST BALANCE FUNCTION
  const showINT = function (movements) {
    const displayInt = movements
      .filter(mov => mov > 0)
      .map(mov => (mov * currentAcc.interestRate) / 100)
      .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${displayInt.toFixed(2)}${
      currencyType.rub
    }`;
  };

  // CREATE UPDATE UI FUNCTION
  const updateUI = function (acc) {
    showMov(acc.movements);
    showBalance(acc);
    showIN(acc.movements);
    showOUT(acc.movements);
    showINT(acc.movements);
  };

  updateUI(currentAcc);

  // 6. TRANSFER MONEY TO CHOOSEN USER
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();

    const userInput = inputTransferTo.value;
    const amountInput = Number(inputTransferAmount.value);
    const findAcc = accounts.find(acc => acc.initials === userInput);

    if (
      amountInput > 0 &&
      findAcc &&
      currentAcc.balance >= amountInput &&
      findAcc?.initials !== currentAcc.initials
    ) {
      currentAcc.movements.push(-amountInput);
      findAcc.movements.push(amountInput);
      updateUI(currentAcc);
      alert(
        `the money ${amountInput} has been successfully sent to ${userInput}`
      );

      // update all movements
    } else {
      console.log(`You don't have enough money or this user not found`);
    }

    inputTransferTo.value = '';
    inputTransferAmount.value = '';
  });

  // 7. LOAN FUNCTION
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amountLoan = Number(inputLoanAmount.value);
    const checkToLoan = currentAcc.movements.some(
      mov => mov >= amountLoan * 0.1
    );
    if (amountLoan > 0 && checkToLoan) {
      currentAcc.movements.push(amountLoan);
      inputLoanAmount.value = '';
      updateUI(currentAcc);
    } else {
      alert(`Sorry! We can't give you this loan`);
      inputLoanAmount.value = '';
    }
  });

  // 8. SORT FUNCTION
  let sorted = false;
  btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    showMov(currentAcc.movements, !sorted);
    sorted = !sorted;
  });
});

// FROM USERNAME TO INITIAL FUNCTION
const toInit = function (accs) {
  accs.forEach(function (acc) {
    acc.initials = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

toInit(accounts);

// --- DELETE ACCOUNT FUNCTION ---
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  btnReg.style.display = 'block';

  let confDel;
  if (
    inputCloseUsername.value === currentAcc.initials &&
    Number(inputClosePin.value) === currentAcc.pin
  ) {
    confDel = confirm(`Delete this account?`);
  } else {
    alert(`You type wrong datas`);
  }

  const indexAcc = accounts.findIndex(
    acc =>
      acc.initials === inputCloseUsername.value &&
      currentAcc.initials === acc.initials
  );

  if (confDel) {
    accounts.splice(indexAcc, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';

    alert('This account was deleted!');
  } else {
    console.log(`You cancelled this action!`);
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
  btnExit.style.display = 'none';
});

// ----- CREATE LOGOUT FUNCTION -----
const logOut = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Log in to get started`;
  btnReg.style.display = 'block';
  btnExit.style.display = 'none';
};

// ---------- LOG OUT FUNCTION ----------
btnExit.addEventListener('click', function (e) {
  e.preventDefault();
  logOut();
});
