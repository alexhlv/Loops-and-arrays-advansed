/* Завдання 1:*/

// Задача 1:
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     if (i < 8) {
//         document.write(numbers[i] + '-');
//     } else {
//         document.write(numbers[i]);
//     }
// }

/* Завдання 1:*/
/* Завдання 2:*/

// Задача 2:
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// const num = [4, -1, 2, 5, -8, -5, 9, -4];

// function sumNum(arr) {
//   let primer = '';
//   let sum = 0;

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//       sum = sum + arr[i];
//       primer = primer + arr[i] + '+';
//     }
//   }
//   primer = primer.substring(0, primer.length - 1)
	
//   return primer + '=' + sum;
// }

// console.log(sumNum(num));

/* Завдання 2:*/
/* Завдання 3:*/

// Задача 3:
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 5) {
//         console.log('Є');
//         break;
//     } else {

//     }
// }

// console.log(numbers);

/* Завдання 3:*/
/* Завдання 4:*/

// Задача 4:
// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);

/* Завдання 4:*/
/* Завдання 5:*/

// Задача 5:
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

// function words() {
//     var k = 0;
//     var stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
//     var f = prompt("Vvedite stroky:");
//     for (var i = 0; i < f.length; i++)
//         for (var j = 0; j < stringsearch.length; j++)
//             if (f[i] === stringsearch[j]) {
//                 ++k;
//                 break;
//             }
//     return k ? k : "Net sovpadenyi";
// }

// console.log(words());

/* Завдання 5:*/
/* Завдання 6:*/

// Задача 6:
// Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.

// function range(start, end, step) {
//     if (step == null) step = 1;
//     var array = [];
  
//     if (step > 0) {
//       for (var i = start; i <= end; i += step)
//         array.push(i);
//     } else {
//       for (var i = start; i >= end; i += step)
//         array.push(i);
//     }
//     return array;
// }

// console.log(range(5, 2, -1));

/* Завдання 6:*/
/* Завдання 7:*/

// Задача 7:
// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const matrix = [ 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const four = matrix[1][0];

// console.log(four);

// console.log(matrix[1][0]);

/* Завдання 7:*/
/* Завдання 8:*/

// Задача 8:
// Посчитайте сумму элементов массива из Задания 7;

/*const matrix = [ 
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
];

// let arr = 0;
// let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}*/

// console.log(matrix[i][j]);
// sum += matrix[i];
// total += arr[i];
// console.log(sum);
// console.log(arr);



// const matrix = [ 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const four = matrix[1][0];

// console.log(four);

// console.log(matrix[1][0]);

/* Завдання 8:*/
/* Завдання 9:*/

// Задача 9:
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.



/* Завдання 9:*/
/* Завдання 10:*/

// Задача 10:
// Создать функцию createMatrix(), принимающую количество строк и количество столбцов матрицы и возвращающее матрицу (массив массивов), заполненную случайными числами в диапазоне от 0 до 100. Вывести эту матрицу в виде таблицы в HTML.




/* Завдання 10:*/