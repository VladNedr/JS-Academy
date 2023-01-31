"use strict";
/*
Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
 */
const title = prompt("Как называется Ваш проект?");
console.log(title);
/*
 Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")
 */
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);
/*
 Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
 */
const screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice);
/*
Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость
 */
const service1 = prompt(
  "Какой дополнительный тип услуги нужен?",
  "сайт , дизайн , макет"
);
console.log(service1);
const servicePrice1 = prompt("Сколько это будет стоить?", "20000");
console.log(servicePrice1);
const service2 = prompt(
  "Какой допольнительный тип услуги нужен?",
  "велосипед , самокат , лыжи "
);
console.log(service2);
const servicePrice2 = prompt(" Сколько это будеи стоить?", "10000");
console.log(servicePrice2);
/*
 Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
*/
const fullPrice =
  Number(screenPrice) + (Number(servicePrice1) + Number(servicePrice2));
console.log("Итоговая стоимость : ", fullPrice);
console.log(fullPrice);
/*
Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
*/
const partnerCost = 4799.78;
const servicePercentPrice = Math.ceil(Number(fullPrice) - Number(partnerCost));
console.log(servicePercentPrice);

/*
 Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
*/
const adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
/*
Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
  - Если fullPrice больше 30000, то “Даем скидку в 10%” 
  - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
  - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
  - Если отрицательное значение то вывести “Что то пошло не так” 
  - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)
*/
if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
