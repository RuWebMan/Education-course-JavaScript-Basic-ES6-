// Это однострочный комментарий

/* Это 
многострочный
комментарий */

/**
 * 
 * Это JSDoc комментарий
 * 
 */

/**
 * Типы данных:
 * 1. Примитивные
 * - Number: 2023, 1.5, Nan, Infinity
 * - String: "Hello", 'Hello', `Hello`
 * - Boolean: true, false
 * - NuLL: nuLL
 * - Undefined: undefined
 * - Symbol()
 */

/**
 * Типы данных:
 * 2. Объекты(Reference type). Ссылочные типы.
 * - Object: {name: "Denis", age: 30}
 * Array: [1, 2, 3, 4, 5]
 * Function: function foo() {}
 * Date: new date()
 */

// var, let, const

var age = 35;
age = 25;
console.log(age);

let myname = 'WebMan';
console.log(myname);
myname = 'RuWebMan';
console.log(myname);

let $myName = 'Gerbert';
let _myName = 'Gerbertusha';
// let 1myName = 'Tolya' - SyntaxError
console.log($myName, _myName);

const firsName = 'Anatol';
// firsName = 'Tolya' - Error
const user = {
    name: 'Hercules',
    age: 8000
};
console.log(user);

user.name = 'Heric';
user.age = 15000;
console.log(user);

// Преобразование типов

let value;

// Number to String

value = String(10); // String - функция
console.log(value); // 10
console.log(typeof value); // string

value = String(10 + 40);
 console.log(value); // 50
console.log(typeof value); // string

value = (40).toString(); // .toString - метод
console.log(typeof value); // String

// Boolean to String

value = String(true);
console.log(value); // true
console.log(typeof value); // string

value = String(false);
console.log(value); // false
console.log(typeof value); // string

// Array to String

value = String([1, 2, 3]);
console.log(value); // 1, 2, 3
console.log(typeof value); // string

// Object to String

value = String({myname: 'WebMan'}); 
console.log(value); // [Object Object]
console.log(typeof value); // String

// Date to String

value = String(new Date()); 
console.log(value); // Mon Jan 30 2023 13:02:46 GMT+0300 (Москва, стандартное время)
console.log(typeof value); // string

// Symbol to String

value = String(Symbol()); 
console.log(value); // Symbol()
console.log(typeof value); // String

// Function to String

value = String(function foo() {});
console.log(value); // function foo() {}
console.log(typeof value); // string

value = 30 + '';
console.log(value); // 30
console.log(typeof value); // string

value = 30 +  '' + 40;
console.log(value); // 3040 
console.log(typeof value); // string

value = 30 + '' + undefined;
console.log(value); // 30undefined
console.log(typeof value); // string

value = 30 + undefined;
console.log(value); // NaN
console.log(typeof value); // number

value = 30 - ''; 
console.log(value); // 30
console.log(typeof value); // number

value = 30 -  'suppwer';
console.log(value); // NaN
console.log(typeof value); // number

value = 30 * '5';
console.log(value); // 150
console.log(typeof value); // number

value = 30 + true;
console.log(value); // 31
console.log(typeof value); // number

value = 30 + false; 
console.log(value); // 30
console.log(typeof value); // number

value = 30 + null;
console.log(value); // 30
console.log(typeof value); // number

// String to Number

value = Number('10');
console.log(value); // 10
console.log(typeof value); // number

value = Number('10.5');
console.log(value); // 10.5
console.log(typeof value); // number

value = Number(false);
console.log(value); // 0
console.log(typeof value); // number

value = Number(true);
console.log(value); // 1
console.log(typeof value); // number

value = Number(null);
console.log(value); // 0
console.log(typeof value); // number

value = Number(undefined);
console.log(value); // NaN
console.log(typeof value); // number

value = Number(NaN);    
console.log(value); // NaN
console.log(typeof value); // number

value = Number(Infinity);
console.log(value); // Infinity
console.log(typeof value); // number

value = Number('Infinity');
console.log(value); // Infinity
console.log(typeof value); // number

value = Number('false');
console.log(value); // NaN
console.log(typeof value); // number

value = Number([1, 2, 3]);
console.log(value); // NaN
console.log(typeof value); // number    

// parseInt & parseFloat

value = parseInt('10');
console.log(value); // 10
console.log(typeof value); // number

value = parseInt('10text');
console.log(value); // 10
console.log(typeof value); // number

value = parseInt('text10text');
console.log(value); // NaN
console.log(typeof value); // number

value = parseFloat('10.5');
console.log(value); // 10.5
console.log(typeof value); // number

// Boolean 

value = Boolean(''); // true
value = Boolean('text'); // true
value = Boolean(null); // false 
value = Boolean(undefined); // false
value = Boolean(NaN); // false
value = Boolean(0); // false
value = Boolean(1); // true
value = Boolean(-1); // true
value = Boolean(true); // true
value = Boolean({}); // true
value = Boolean([]); // true

value = Boolean(new Date()); 
console.log(value); // true
console.log(typeof value); // boolean

value = Boolean(Symbol()); 
console.log(value); // true
console.log(typeof value); // boolean

// Числа

















