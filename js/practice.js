let numAddition1 = prompt( 'Задай перше значення діапазону чисел' );
let numAddition2 = prompt( 'Задай друге значення діапазону чисел' );
let summaryNum = 0 ;
for ( let index = +numAddition1; index <= +numAddition2; index++ ){
    summaryNum += index;
}
alert( summaryNum );


let NOD1 = prompt ( 'Введіть перше число з якого буде визначатись найбільший спільний дільник' );
let NOD2 = prompt ( 'Введіть друге число з якого буде визначатись найбільший спільний дільник' );
while (NOD1 !== 0 && NOD2 !==0){
    if ( NOD1 > NOD2 ) {
        NOD1 = NOD1 % NOD2;
    } else {
        NOD2 = NOD2 % NOD1;
    }
}
alert ( NOD1 + NOD2 );


let userNumb = prompt ( 'Введіть число, а я знайду всі його дільники\
\n Результат буде виведений в консолі!' );
let nb = 0;
while ( nb ++ <= userNumb ) {
    if ( userNumb % nb == 0 ) {
    console.log ( nb );
    }
}


let userNum = prompt ( 'Введіть будь що, а я перевірю скільки символів було введено' );
alert( userNum.length );

let pos = 0 ;
let neg = 0 ;
let zero = 0 ;
let odd = 0 ;
let even = 0 ;

for ( let i = 0; i <= 9; i++ ) {
    let num = prompt ( ` Введи 10 чисел. В кінці я порахую скільки серед них позитивних, негативних, нулів, парних і непарних. ` ) ;
    if ( num & 1 ){
        odd ++ ;
    } else{
        even ++ ;
    }
    if ( num > 0 ){
        pos ++ ;
    } else if ( num == 0 ){
        zero ++ ;
    } else if ( num < 0 ){
        neg ++ ;
    }


}
alert( `Позитивних: ${pos} \ Негативних: ${neg} \ Нулів: ${zero} \ Парних: ${odd} \ Непарних: ${even} \ ` );

let calcNum1 = 0;
let calcSymbol = 0;
let calcNum2 = 0;
let result = 0;
let resultDisplay = 0;


for (let i = 0; i < 3; i++ ) {
    calcNum1 = prompt ( ` Це калькулятор. Потрібно ввести данні в форматі \ 1.Число \ 2.Математичний символ \ 3. Число. \ Калькулятор порахує введені данні. \ Введи число: ` ) ;
    calcSymbol = prompt ( ` Введи математичний символ. ` ) ;
    calcNum2 = prompt ( ` Введи число. ` ) ;
    result = eval( calcNum1 + calcSymbol + calcNum2 );
    resultDisplay = prompt( `Результат вашого обчислення = ${result} \ Бажаєте продовжити користуватись калькулятором? \ Якщо так - введіть 1. Якщо ні - введіть 2.` );
    if ( resultDisplay == 1 ){
        i = 0;
    } else {
        i = 3;
    }
}





let count = prompt ( 'Введіть число' );
let step = +prompt ( 'Введіть на скільки потрібно змістити це число');
arr = count.split('');

for( let i = 0; i < step; i++ ) {
    arr.push(arr.shift())
}
alert(arr.join``);


const daysOfWeek = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
let currentDay = 0;

while (confirm(`${daysOfWeek[currentDay]}. Хочете побачити наступний день?`)) {
  currentDay = (currentDay + 1) % daysOfWeek.length;
}



document.write ( '<table border=200>' );
for ( i = 1; i <= 9; i ++ ){
document.write ( '<tr>' );

for ( x=1; x<=9; x++ ){
  document.write ( '<td>' +i*x+ '</td>' );
}
}
document.write ( '</tr>' );
document.write ( '</table>' );
