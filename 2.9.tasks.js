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

// Задача 3. Возьмите эту структуру данных и дополните ее товарами
// и группами товаров по примеру тех, которые уже есть:

// const purchase = {
//   Electronics: [
//     { name: 'Laptop', price: 1500 },
//     { name: 'Keyboard', price: 100 },
//   ],
//   Textile: [{ name: 'Bag', price: 50 }],
// };
// Поместите код в файл и выведите всю структуру на экран,
// запустив код в node.js или браузере

const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
    { name: "Phone", price: 1000 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "Socks", price: 10 },
    { name: "Socks", price: 11 },
  ],
  Office: [
    { name: "Pencil", price: 5 },
    { name: "Paper", price: 15 },
  ],
};

console.log(purchase);

// Задача 4. Напишите функцию find, которая будет проходить по структуре из предыдущей
// задачи и находить товар по его имени (проверяя все группы товаров). Имена могут
// повторяться, но на этот раз нас интересует только первый товар, у которого имя совпало.

// Пример использования функции find:

// const result = find(purchase, 'Laptop');
// console.log(result);
// Должно вывести: { name: 'Laptop', price: 1500 }

const find = (categories, productName) => {
  for (const category in categories) {
    for (const product of categories[category]) {
      if (product.name === productName) {
        return product;
      }
    }
  }
};

console.log(find(purchase, "Socks"));

// Задача 5. Теперь расширим предыдущую задачу: нужно так изменить функцию find,
// чтобы она возвращала массив, содержащий все товары с указанным именем.
// Если ни одного не нашли, то пустой массив.

const findAll = (categories, productName) => {
  let allProductsWithName = [];
  for (const category in categories) {
    for (const product of categories[category]) {
      if (product.name === productName) {
        allProductsWithName.push(product);
      }
    }
  }

  return allProductsWithName;
};

console.log(findAll(purchase, "Socks"));
