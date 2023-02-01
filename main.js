"use strict";

const title = prompt("Как называется Ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
const service1 = prompt(
  "Какой дополнительный тип услуги нужен?",
  "сайт , дизайн , макет"
);
const servicePrice1 = +prompt("Сколько это будет стоить?", "20000");

const service2 = prompt(
  "Какой допольнительный тип услуги нужен?",
  "велосипед , самокат , лыжи "
);
const servicePrice2 = +prompt(" Сколько это будет стоить?", "10000");
const adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 10;
const fullPrice =
  Number(screenPrice) + (Number(servicePrice1) + Number(servicePrice2));
const servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);

console.log("Итоговая стоимость : ", fullPrice);
