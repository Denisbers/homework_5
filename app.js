let action = prompt('Please, enter action', 'add, sub, mult, div');
let firstDigit = +prompt('Please, enter first digit');
let secondDigit = +prompt('Please, enter second digit');
let add = firstDigit + secondDigit;
let sub = firstDigit - secondDigit;
let mult = firstDigit * secondDigit;
let div = firstDigit / secondDigit;


alert(`${firstDigit}+${secondDigit}=${add}\n${firstDigit}-${secondDigit}=${sub}\n${firstDigit}*${secondDigit}=${mult}\n${firstDigit}/${secondDigit}=${div}`);


