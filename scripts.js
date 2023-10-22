// ЗАДАНИЕ 1

console.log('от 1 до 50');
let a = 1 ;
for (a; a <= 50 ; console.log(a), a++);

console.log('от 35 до 8');
let b = 35 ;
for (b; b >= 0 ; console.log(b), b--) {
    if (b == 7) break;
}
console.log('');


// ЗАДАНИЕ 2

let c = 89 ;
for (c; c >= 0 ; document.write(c + '<br/>'), c--) {
    if (c == 10) break;
}
console.log('');


// ЗАДАНИЕ 3

let d = 0;
    sum = 0;
for (d; d <= 100; d++) {
    sum += d;
}
console.log(sum);
console.log('');


// ЗАДАНИЕ 4

 let f = 5;
    sum = 0;

for (i = 1; i <= f; i++) {
    sum = 0;
    for (let j=1; j <= i; j++) {
        sum += j;
    }
console.log('Сумма цифр в числе ' + i + ' = ' + sum);
}
console.log('');


// ЗАДАНИЕ 5

let g = 8;
while (g <= 56) {
    if (g % 2 == 0) {
        console.log(g);
    }
    g++;
}

for (let g = 8 ; g <= 56; g++) {
    if (g % 2 == 0) {
    console.log(g);
    }
  }


// ЗАДАНИЕ 6

for (let k = 2; k <= 9; k++) {

    for (let h = 2; h <= 9; h++) {
        NumMultipl = k * h;
        document.write (k + ' * ' + h + ' = ' + NumMultipl + '<br/>');
    }
}


// ЗАДАНИЕ 7

let n = 1000;
let num = 0;
for (; ; n/=2) {
console.log(n);
if (n < 50) break;
num++;
}
console.log (num);


// ЗАДАНИЕ 8

let i = 0;
    sum = 0;

while (true) {
    let num2 = +prompt ('Введите число');
    if (num2 == 0) {
        break;
    } else if (isNaN(num2) == true) {
           alert('Ошибка ввода!');
        }
    i++;
    sum +=num2;
    }
console.log ('Общая сумма = ' + sum);
console.log ('Среднее арифметическое введенных чисел = ' + (sum / i));


// ЗАДАНИЕ 10

let n = +prompt ('Введите произвольно целое число n');
let nStr = String(n);
    a = 0;
    sum = 0;
    n2 = '';
    b = nStr.length - 1;

for (let i = 0; i < nStr.length; i++) {
    console.log(nStr[i]);
    a++;
    sum += Number(nStr[i]);
}
console.log('Количество цифр в числе n - ' + a);
console.log('Сумма цифр числа n - ' + sum);

while (b >= 0) {
    n2 += nStr[b];
    b--;
}
n2 = Number(n2);

console.log('Обратный порядок - ' + n2);
