// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function f1(a,b,c) {
// if (a < b && a < c) {
//     console.log(a);
// } else if (b < c && b < a) {
//     console.log(b);
// } else if (c < b && c < a) {
//     console.log(c);
// }
// }
// f1(74, 10, 8);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function f2(a,b,c) {
//
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > c && b > a) {
//         console.log(b);
//     } else if (c > b && c > a) {
//         console.log(c);
//     }
// }
// f2(15, 17, 14);

// А ЯКЩО Я Б ХОТІВ ПОСТАВИТИ ДВА ОДНАКОВИХ ЧИСЛА???)

// function f3(a,b,c) {
//
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > c && b > a) {
//         console.log(b);
//     } else if (c > b && c > a) {
//         console.log(c);
//     } else if (c == b && b < a) {
//         console.log(a);
//     } else if (c == a && a < b) {
//         console.log(b);
//     } else if (a == b && b < c) {
//         console.log(c);
//     } else if (a == b && b == c) {
//         console.log('Everything in this world is equal to each other');
//     }
// }
// f3(13, 24, 27);

// - створити функцію яка повертає найбільше число з масиву
// ___________________________________Вариант 1___________________________________________
// function f41(massiv) {
//
//         let result = Math.max.apply(null, massiv);
//     console.log(result)
// }
// f41([1, 25, 17, 45, 1025, 7396, 28, 5000000, 856])


// ___________________________________Вариант 2 ______________________________
// let maxMassive = [1,25,17,45,1025,7396,28,5,856];
// function f5(a){
//   let max = a[0];
//   for (let newA of a) {
//     if(newA>max){
//       max=newA;
//     }
//   }
//   return max;
// }
// console.log(`${f5(maxMassive)}`);

// - створити функцію яка повертає найменьше число з масиву

// let maxMassive = [1,25,17,45,1025,7396,28,5,856];
// function f5(a){
//   let max = a[0];
//   for (let newA of a) {
//     if(newA<max){
//       max=newA;
//     }
//   }
//   return max;
// }
// let aa = f5(maxMassive);
// console.log(aa);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let massiveSum = [1,25,17,45,1025,7396,28,5,856];
// function f6 (a) {
//   let sum = 0;
//   for (let newA of a) {
//     sum = newA +sum;
//   }
//   return sum;
// }
// console.log(f6(massiveSum))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let massiveMidle = [1, 25, 17, 45, 1025, 7396, 28, 5, 856];
//
// function f7(array) {
//     let sum = 0;
//     for (let newArray of array) {
//         sum = newArray + sum;
//
//     }
//     return sum / array.length;
// }
//
// let result = f7(massiveMidle);
// console.log(result);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// function f8(){
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const newArray of arguments) {
//        if (newArray>max){
//            max=newArray;
//        }  if(newArray<min){
//
//            min = newArray;
//        }
//     }
//     console.log(max);
//     return min;
// }
// let minResult = f8(25,16,48,34,27);
// console.log(minResult);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function f9(){
// return Math.floor(Math.random() * 100)+1;
// }
// let result = f9();
// console.log(result);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.


// function f10(limit){
//     return Math.floor(Math.random() * limit);
// }
// let result = f10(25);
// console.log(result);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]

// function  f11(array){
//     let go = array;
//     console.log(array);
//     let goBack = array.reverse();
//     console.log(goBack);
//     return goBack;
// }
// let result = f11([25,16,48,34,27]);


