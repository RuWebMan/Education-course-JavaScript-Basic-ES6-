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
console.log(user)

user.name = 'Heric'
user.age = 15000
console.log(user)





