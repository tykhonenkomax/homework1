// - Дано натуральное число n. Выведите все числа от 1 до n.

//
// function f1 (a,n){
//     console.log(a);
//     a++;
//     if(a>=n){
//         return;
//     }else {
//         f1(a,n);
//     }
//
// }
// f1(1,101);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
//


// ------------------------------------------------Вариант № 1 от 1 до 100----------------------------------------
//
// let f2 =(a,b)=>{
//     console.log(a+1);
//     a++;
//     if(a>=b){
//         return;
//     }else {f2(a,b)}
// }
// f2(0,100);

// ------------------------------------------------Вариант № 2 от 100 до 1----------------------------------------



// let f2 =(a,b)=>{
// console.log(b);
// b--;
// if(a===b){
//     return;
// }else {f2(a,b)}
// }
// f2(0,100);


//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let f2 =(arry1,index1)=>{
// let x = arry1[index1];
// arry1[index1] = arry1[index1 + 1];
//     arry1[index1 + 1] = x;
// return arry1;
// }
// let result1 = f2([9,8,0,4], 0);
// console.log(result1);
//
// let f3 =(arry2,index2)=>{
//     let y = arry2[index2];
//     arry2[index2] = arry2[index2 + 1];
//     arry2[index2 + 1] = y;
//     return arry2;
// }
// let result2 = f3([9,8,0,4], 1);
// console.log(result2);
//
// let f4 =(arry3,index3)=>{
//     let z = arry3[index3];
//     arry3[index3] = arry3[index3 + 1]
//     arry3[index3+1] = z;
//     return arry3;
// }
// let result3 = f4([9,8,0,4], 2);
// console.log(result3);


// ------------------------------НУ ПРЯМ МОЗККК ВКИПІВ ВІД ТОГО-----------------------------

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому
// порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let f5 = (array)=>{
// let newArray = [];
// let newArray2 =[];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===0) {
//             newArray.push(array[i]);
//         } else if ((array[i]>0))
//         newArray2.push(array[i]);
//
//     }
//     return newArray2.concat(newArray);
// }
// let result = f5([1,0,6,0,3]);
// console.log(result);

// --------------А ТУТ ЛЕГКО АЛЕ ГОДИНУ ТУПИВ А ПОТІМ СТРІЛЬНОЛО І 3 ХВ і написав---------------