// Все робити за допомоги js.
// - створити блок,
//- додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let task1 = document.createElement('div')
// console.log(task1);
// task1.classList.add('wrap');
// task1.classList.add('collapse');
// task1.classList.add('alpha');
// task1.classList.add('beta');
// task1.style.background='tomato';
// task1.style.color='black';
// task1.style.fontSize='16px';
// document.body.appendChild(task1.cloneNode(true))
//--------------------------------------------------------------------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let array = ['Main','Products','About us','Contacts'];
// let ul = document.getElementsByClassName('menu')[0];
// console.log(ul);
// for (let i = 0; i < array.length; i++) {
//     let li = document.createElement('li');
//     li.innerText=array[i];
//     ul.appendChild(li);
// }
//--------------------------------------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const iterArray of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.innerText= `${iterArray.title} - ${iterArray.monthDuration}`;
//     document.body.appendChild(div)
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//     з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// <div className='item'>
// <h1 className='heading'>
// <p className='description'></p>
// </h1>
// </div>

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
for (const iterArray of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')
   let h1 =document.createElement('h1');
    h1.innerText=iterArray.title;
    h1.classList.add('heading')

    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText=iterArray.monthDuration;

    div.appendChild(h1)
    div.appendChild(p)
    document.body.appendChild(div)
    console.log(div)
}