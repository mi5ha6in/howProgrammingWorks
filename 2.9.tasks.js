// https://github.com/HowProgrammingWorks/Book/blob/master/content/ru/2-9-Tasks.md

// Задача 1
// Возьмем пример, который мы уже рассматривали, но в него добавлено несколько ошибок.
// Скопируйте этот код в отдельный файл и исправьте его, чтобы он не только работал,
// но был красивым и понятным. За эталон можно брать код из книги и лекций.

// const Items = [
//   { CENA: 40 } ,{ CENA : 120 },{
//   CENA: '505',
//   }, { CENA: 350 }];

// For (const ITEM of items){
// console.log(`Price: ${item.price}`);
// }

const items = [{ price: 40 }, { price: 120 }, { price: 505 }, { price: 350 }];

for (const item of items) {
  console.log(`Price: ${item.price}`);
}
