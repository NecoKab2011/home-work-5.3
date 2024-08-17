const drinks = prompt("Виберіть напій: кава, чай і сік");
let select1;

switch (drinks) {
  case "кава":
    select1 = "Ви вибрали каву";
    break;
  case "чай":
    select1 = "Ви вибрали чай";
    break;
  case "сік":
    select1 = "Ви вибрали сік";
    break;
  default:
    select1 = "Це не входить в список перелічуваних напоїв";
}
alert(select1);


const daysInWeeks = prompt("Введіть день тижня");
let select2;

switch (daysInWeeks) {
  case "понеділок":
    select2 = "Понеділок це день тижня";
    break;
  case "вівторок":
    select2 = "Вівторок це день тижня";
    break;
  case "середа":
    select2 = "Середа це день тижня";
    break;
  case "четвер":
    select2 = "Четвер це день тижня";
    break;
  case "п'ятниця":
    select2 = "П'ятниця це день тижня";
    break;
  case "субота":
    select2 = "Субота це день тижня";
    break;
  case "неділя":
    select2 = "Неділя це день тижня";
    break;
  default:
    select2 = "Це не день тижня";
}
alert(select2);

const monthOfYear = prompt("Введіть будь-який місяць");
let select3;

switch (monthOfYear) {
  case "січень" || "лютий" || "грудень":
    select3 = "Це зима";
    break;
  case "березень" || "квітень" || "травень":
    select3 = "Це весна";
    break;
  case "червень" || "липень" || "серпень":
    select3 = "Це літо";
    break;
  case "вересень" || "жовтень" || "листопад":
    select3 = "Це осінь";
    break;
  default:
    select3 = "Це не місяць";
}
alert(select3);

const monthOfYear2 = prompt("Введіть будь-який місяць");
let select4;

switch (monthOfYear2) {
  case "січень" || "березень" || "травень" || "липень" || "серпень" || "жовтень" || "грудень":
    select4 = "У цьому місяці 31 день";
    break;
  case "червень" || "вересень" || "листопад" || "квітень":
    select4 = "У цьому місяці 30 днів";
    break;
  case "лютий":
    select4 = "У цьому місяці 28 днів або 29, якщо високосний рік";
    break;
  default:
    select4 = "Це не місяць";
}
alert(select4);

const colors = prompt("Введіть будь-який колір");
let select5;
switch (colors) {
  case "червоний":
    select5 = "Стій";
    break;
  case "жовтий":
    select5 = "Чекай";
    break;
  case "зелений":
    select5 = "Йди";
    break;
  case "чорний":
     select5 = "Ви ввели особливий колір";
    break;
  default:
    select5 = "Це колір, якому не належить ніяка дія";
}
alert(select5);










































































































