// var userNumber = +prompt('Введите число');
// var userExponent = +prompt('Введите степень');
//
// function pow(a, b) {
//   var result = 1;
//
//   for (var i = 0; i < userExponent; i++) {
//     result = result * userNumber;
//   }
//
//   return result;
// }
//
// console.log( pow() );

///////////////////////////////////////////////
//////////////// ПЕРВЫЙ ВАРИАНТ //////////////
/////////////////////////////////////////////
 var names = [];

 for (var i = 0; i < 5; i++) {
   names[i] = prompt('Введите имя');
 }

 console.log(names);

 var userName = prompt('Введите имя пользователя');
 var flag = false;

 for (var i = 0; i < names.length; i++) {
   if (userName === names[i]) {
     flag = true;
     break;
   }
 }

 if (flag) {
   alert(userName + ", вы успешно вошли");
 } else {
   alert("Пользователя, " + userName + ", не существует");
 }

///////////////////////////////////////////////
/////////////// ВТОРОЙ ВАРИАНТ ///////////////
/////////////////////////////////////////////

var names = [];

for (var i = 0; i < 5; i++) {
  names[i] = prompt('Введите имя');
}

var userName = prompt('Введите имя пользователя');
var flag = false;

for (var i = 0; i < names.indexOf( userName ); i++) {
  if (names[i] !== -1) {
    flag = true;
    break;
  }
}

if (flag) {
  alert(userName + ", вы успешно вошли");
} else {

  alert("Пользователя, " + userName + ", не существует");
}

 var names = [];

 for (var i = 0; i < 5; i++) {
   names[i] = prompt('Введите имя');
 }

 console.log(names);

 var userName = prompt('Введите имя пользователя');
 var flag = false;

 for (var i = 0; i < names.length; i++) {
   if (names[i].indexOf( userName ) === 0) {
     flag = true;
     break;
   }
 }

 if (flag) {
   alert(userName + ", вы успешно вошли");
 } else {

   alert("Пользователя, " + userName + ", не существует");
 }
