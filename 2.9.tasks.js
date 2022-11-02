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

// Задача 2. Теперь давайте сделаем функцию, которая вычислит сумму всей покупки.
// Дайте функции понятное название и добавьте такие правила: нужно проверять,
// является ли цена числом (при помощи typeof), суммируем только положительные цены,
// а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.

const getTotalPrice = (prices) => {
  let total = 0;
  for (const { price } of prices) {
    if (typeof price !== "number") {
      throw new Error("price is not number");
    }

    if (price < 0) {
      throw new Error("price less than 0");
    }

    total += price;
  }

  return total;
};

console.log(getTotalPrice(items));
