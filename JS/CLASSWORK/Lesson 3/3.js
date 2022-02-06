/*
  Використовуючи данні з масиву, за допомоги document.write та циклу
  побудувати структуру по шаблону template1.1
  */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li> ${listOfItems[i]} </li>`)
}
document.write('</ul>')
document.write(`<br>`)

/*_________________________________________________________________________________________________*/


/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
Шаблон застосувати до кожного об'єкта в масиві
*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартоломю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

/*_________________________________Вариант 1_______________________________________________*/
document.write('<div class="allBox">')
for (let i = 0; i < simpsons.length; i++) {
    document.write(`<div class="allBox2">`)
    document.write(`<div class="a"> NAME - ${simpsons[i].name} </div>`);
    document.write(`<br>`)
    document.write(`<div class="b"> SURNAME. ${simpsons[i].surname}</div>`);
    document.write(`<br>`)
    document.write(`<div class="c"> Age is - ${simpsons[i].age}</div>`);
    document.write(`<br> <br>`)
    document.write(`<div class="d"> ${simpsons[i].info}</div>`);
    document.write(`<img class="e" src="${simpsons[i].photo}" alt="photo">`);
    document.write('</div>');
}
document.write(`<div>`)
/*_________________________________Вариант 2_______________________________________________*/
document.write(`<div>`)

document.write(`<div class="generalBox">`)
for (const simpsonsKey in simpsons) {
    document.write(`<div class="box"> <h1>NAME - ${simpsons[simpsonsKey].name}</h1> 
<h3>SURNAME. ${simpsons[simpsonsKey].surname}</h3> <h5>Age is - ${simpsons[simpsonsKey].age}</h5>
 <p>${simpsons[simpsonsKey].info}</p> <img class="img" src="${simpsons[simpsonsKey].photo}"> </div>`)
}
document.write(`</div>`)
document.write(`</div>`)


/*_________________________________________________________________________________________*/
/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
    */
let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div>`)
document.write(`<div class="list">`)
for (let productsKey in products) {
    document.write(`<div class="products">`)
    document.write(`<h4> <span class="span">${products[productsKey].title}.</span>  Price -   ${products[productsKey].price} </h4>
<img class="img" src="${products[productsKey].image}"> </div>`)
}
    document.write(`</div>`)
