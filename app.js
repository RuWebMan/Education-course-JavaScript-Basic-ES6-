// Это однострочный комментарий.

/* Это 
многострочный
комментарий */

/**
 * 
 * Это JSDoc комментарий.
 * 
 */

/**
 * Типы данных:
 * 1. Примитивные.
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

// var, let, const.

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

// Преобразование типов.

let value;

// Number to String.

value = String(10); // String - функция
console.log(value); // 10
console.log(typeof value); // string

value = String(10 + 40);
 console.log(value); // 50
console.log(typeof value); // string

value = (40).toString(); // .toString - метод
console.log(typeof value); // String

// Boolean to String.

value = String(true);
console.log(value); // true
console.log(typeof value); // string

value = String(false);
console.log(value); // false
console.log(typeof value); // string

// Array to String.

value = String([1, 2, 3]);
console.log(value); // 1, 2, 3
console.log(typeof value); // string

// Object to String.

value = String({myname: 'WebMan'}); 
console.log(value); // [Object Object]
console.log(typeof value); // String

// Date to String.

value = String(new Date()); 
console.log(value); // Mon Jan 30 2023 13:02:46 GMT+0300 (Москва, стандартное время)
console.log(typeof value); // string

// Symbol to String.

value = String(Symbol()); 
console.log(value); // Symbol()
console.log(typeof value); // String

// Function to String.

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

// String to Number.

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

// parseInt & parseFloat.
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

// Boolean.

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

// Числа.

const a = 10;
const b = 20;
let newValue = a + b;
console.log(newValue); // 30
newValue += 10; // прибавляем 10 к value
console.log(newValue); // 40
newValue -= 10; // вычитаем 10 от value
console.log(newValue); // 30
newValue = 5 % 2; // остаток от деления value на 2
console.log(newValue); // 1
value++ // увеличиваем value на 1, увеличение произойдет на следующей строке
console.log(value); // 2
value-- // уменьшаем value на 1, уменьшение произойдет на следующей строке
console.log(value); // 1
++value // увеличиваем value на 1, увеличение произойдет сразу на этой строке
console.log(value); // 2
--value // уменьшаем value на 1, уменьшение произойдет сразу на этой строке
console.log(value); // 1

// Неточные вычисления.

value = 0.6 + 0.7;
console.log(value); // 1.2999999999999998
value = +(value.toFixed(1)) // или value = parseFloat(value.toFixed(1)) или value = (0.6 * 10 + 0.7 * 10) / 10
console.log(value); // 1.3

// Math - объект свойств и методов.

value = Math.PI;
console.log(value); // 3.141592653589793
value = Math.E; 
console.log(value); // 2.718281828459045
value = Math.random(); // метод random возвращает число от 0 до 1
value = Math.round(2.4); // метод round округляет число = 2
value = Math.ceil(2.1); // метод ceil округляет число в большую сторону = 3
value = Math.floor(2.9); // метод floor округляет число в меньшую сторону = 2
value = Math.min (10, 20, 30, 40); // метод min возвращает наименьшее число = 10
value = Math.max (10, 20, 30, 40); // метод max возвращает набольшее число = 40

value = Math.floor(Math.random() * 10 + 1); // метод random возвращает рандомное число от 1 до 10
console.log(value); // рандомное число от 1 до 10

const arr = ['pink', 'blue', 'green'];
value = Math.floor(Math.random() * arr.length); // 
console.log(value, arr[value]); // будет возвращать рандомное значение из массива arr

//String. Операции со строчными элементами.

const someName1 = 'Web';
const someName2 = 'Man';
const someage = 30
const string = "Hi, a'm WebMan"

value = someName1 + someName2; //конкатенация = WebMan
value = someName1.concat(someName2, ' ' ,someage); //конкатенация
console.log(value); // WebMan 30

value += someName1 + someName2; // 
console.log(value); // WebMan 30WebMan

value = someName1 + ' ' + someName2;
console.log(value); // Web Man

value = someName1.length
console.log(value); // 3

value = someName1[2]
console.log(value); // b

value = someName1 + someName2;
value = someName1[someName1.length - 1]
console.log(value); // b

value = someName1 + someName2;
value = value[value.length - 1]
console.log(value); // n

value = string.indexOf('M',0); // поиск первого упоминания символа "М", начать поиск c индекса 0
console.log(value); // 11

value = string.includes('Hi')
console.log(value); // true

value = string.slice(0,2) // вырезать из строки с индекса 0 до 2
console.log(value); // Hi

value = string.replace('Hi', 'Hello') // заменить одно значение на указанное 
console.log(value); // Hello, a'm WebMan

value = string.split(' ') // разделить строку по пробелам
console.log(value); // ['Hi', 'a','m', 'WebMan']

value = string.split('') // разделить строку по символам
console.log(value); // ['H', 'i', 'l', 'l', 'o','', 'a','m', 'w', 'o', 'r', 'l', 'd']

value = string.trim() // убрать пробелы
console.log(value); // Hi a'm WebMan

value = string.toLowerCase() // вернуть строку в нижнем регистре
console.log(value); // hi a'm webman

value = string.toUpperCase() // вернуть строку в верхнем регистре
console.log(value); // HI A M WEBMAN

// Tamplate String. Операции с шаблонами.

document.body.innerHTML = string; // шаблон, который выведет содержимое str в виде списка.

str = `
<ul>
    <li>First name: ${someName1} </li>
    <li>Last name: ${someName2} </li>
    <li>Age: ${age} </li>
    <li>Math.random: ${Math.random()} </li>
    <li>5 + 5: ${5 + 5} </li>
</ul>
`;
document.body.innerHTML = string;
console.log(str); 

// Объкты в JS.

const newuser = {
    firstName: 'John',
    lastName: 'Ivanov',
    age: 30,
    isAdmin: true,
    email: 'kenaa@example.com',
    'user-address': {
        street: 'Lenina',
        city: 'Moscow',
        country: 'Russia'  
    },
    skils: ['HTML', 'CSS', 'JavaScript']    
};

 value = newuser.firstName;
 console.log(value); // John

 value = newuser['lastName'];
 console.log(value); // Ivanov

 value = newuser['user-address']['street'];
 console.log(value); // Lenina  

 let prop = 'skils';
 value = newuser[prop];
 console.log(value);// ['HTML', 'CSS', 'JavaScript']

 value = newuser[prop][0];
 console.log(value); // HTML

 newuser.age = 40; // обновляем значение age
 value = newuser.age;
 console.log(value); // 40
 console.log(newuser); // { firstName: 'John', lastName: 'Ivanov', age: 40, isAdmin: true, email: 'kenaa@example.com', 'user-address': { street: 'Lenina', city: 'Moscow', country: 'Russia' }, skils: ['HTML', 'CSS', 'JavaScript'] }

 delete newuser.age; // удаляем значение age
 console.log(newuser); // { firstName: 'John', lastName: 'Ivanov', isAdmin: true, email: 'kenaa@example.com', 'user-address': { street: 'Lenina', city: 'Moscow', country: 'Russia' }, skils: ['HTML', 'CSS', 'JavaScript'] }

 newuser.info = 'Some info'; // добавляем значение info
 console.log(newuser); //

 newuser['user-address'].city = 'Krasnogorsk'; // меняем значение city на 'Krasnogorsk'
 console.log(newuser); // 

 newuser.plan = {};
 newuser.plan.basic = true;
 console.log(newuser); // { firstName: 'John', lastName: 'Ivanov', age: 40, isAdmin: true, email: 'kenaa@example.com', 'user-address': { street: 'Lenina', city: 'Moscow', country: 'Russia' }, skils: ['HTML', 'CSS', 'JavaScript'], plan: { basic: true } }


























