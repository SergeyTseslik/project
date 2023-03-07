const venicleBodyWidth =5000;
const venicleBodyLength =4000;

////


console.log("Ширина кузова автомобиля: " + venicleBodyWidth +", длина: " + venicleBodyLength);

/* ["vruru", "ecrvrev", "dds"].map(a =>);
 */

// reguest
data; 
response; 

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

const COLOR_RED ="#F00";

// Отдельно логичские операторы

/* const num = true;
      ber = false;
      if (num && ber) {
console.log("Я ссыт");
      } else {
        console.log("Я голоден");
      }
      
        console.log((num && ber)); */

        const hamburger = 2;
      fries = 1;
      if (hamburger ===3 && fries ) {
console.log("Все ссыты");
      } else {
        console.log("Мы уходим");
      }
      
      const hamburger = 3;
      const fries = 3;
      const cola = 0;
      const nuggets = 2;
      if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
        console.log("Все сыты");
      } else {
        console.log("Мы уходим");
      }
      console.log(hamburger === 3 && cola === 2 );

      console.log (5 && 0);
      console.log(0 && 1);
      console.log (4 && 2);
      console.log(null && 0);
      console.log(0 && "fffdgdfg");

      let johnReport , alexReport, samReport, mariaReport = "done";

      console.log(!0);

      console.log( NaN || 2 || undefined );

      console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else {
  console.log("Не выполняется");
}

const num = 5;
const rum = 10;
console.log("номер: " + num + ", длина: " + rum);      

console.log(typeof false);

const obj = {
  name:"Johh",
  age: 24,
  isMarried: true
};
console.log(obj.name);

const apple = 10;
fries = 54;
if (apple >= 5 && fries >= 10) {
  console.log("спасибо за жрачку");
} else {
  console.log("Та пошли вы нахуй");
}

/* let sergey = {
name: "Sergey",
age: 18
}
let rita = {
  name:"Rita",
  age: 13
}
if (sergey.age <= 18 && rita.age >=13) {
  console.log("Можно и нужно встречаться и любить друг друга");
} else {
  console.log("Вам не суждено быть вместе");
} */

/* let sergey = ["Sergey", 18, "Boy"];
let rita = ["Rita", 13, "Gerl"];
if (sergey[1] <= 18 && rita[1] >= 13) {
  console.log("Можно и нужно встречаться и любить друг друга");
} else {
  console.log("Вам не суждено быть вместе");
} */

"use strict";

let num = 50;

/* while (num <= 55) {
  console.log(num);
  num++;
} */

/* do {
  console.log(num);
  num++;
}
while (num < 55); */

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;
    //continue;
  }
  console.log(i);
 
}

for (let i = 0; i < 6; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}
//Пирамидка
let result = "";
const length = 7;
for (let i = 1; i < length; i++) {
for (let j = 0; j < i; j++) {
result += "*";
}
  result += "\n";
}
console.log(result);
//Vitalik
let vitalik = "";
const stopchik = 10;
for (let i = 1; i < stopchik; i++) {
  for (let j = 0; j < i; j++) {
    vitalik += "Не балуйся";
  }
  vitalik += "\n";
}
console.log(vitalik);


first:for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
      for (let k = 0; k < 5; k++) {
        if (k === 2) continue first;
        console.log(`Third level: ${k}`);
      }
    }
}