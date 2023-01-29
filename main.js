const title = "Java Script";
console.log(typeof title);

const screens = "Простые, Сложные, Интерактивные";
console.log(screens.length);
console.log(screens.toLowerCase().split());

const screenPrice = 30;
console.log(
  " Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани "
);
console.log(
  ` Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани `
);

let rollback = 10;

const fullPrice = 50000;
console.log(typeof fullPrice);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
);

let adaptive = true;
console.log(typeof adaptive);

const rollbackPercent = fullPrice * (rollback / 100);
console.log(rollbackPercent);
