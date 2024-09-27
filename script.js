//Методы массивов

let arrayNames = ['John', 'Drake', 'Bob'];
let arrayNumbers = [1, 2, 4, 3, 8, 12];

/*map() - Создает новый массив, применяя функцию к каждому элементу*/
function mapArray() {
    let mapArrayNames = arrayNames.map((item, index) => {
        return { name: item, number: arrayNumbers[index] };
    }); 
    let mapArrayNumbers = arrayNumbers.map(num => num * 2); 
    console.log(mapArrayNames);
    console.log(mapArrayNumbers); // [2, 4, 8, 6, 16, 24]
}

/*filter() - Создает новый массив, содержащий только те элементы, которые соответствуют условию*/
function filterArray() {
    let filterArrayNumbers = arrayNumbers.filter(num => num % 2 !== 0); //[1, 3]
    console.log(filterArrayNumbers);
}

/*find() - Возвращает первый элемент массива, который удовлетворяет условию.*/
function findArray(letter) {
    let findArrayNames = arrayNames.find(item => item[2] === letter);
    console.log(findArrayNames);
    return findArrayNames ? findArrayNames : 'Элемент не найден'
}

/*findIndex() - Возвращает индекс первого элемента, который удовлетворяет условию.*/
function findIndexArray() {
    let findIndexArrayNumbers = arrayNumbers.findIndex(num => num % 3 === 0 && num % 4 === 0); //5
    console.log(findIndexArrayNumbers);
    return findIndexArrayNumbers ? findIndexArrayNumbers : 'Элемент не найден'
}

/*findLastIndex() - возвращает индекс последнего элемента массива, который удовлетворяет переданной функции проверки. 
Если ни один элемент не удовлетворяет условию, возвращается -1.*/
function findLastIndexArray() {
    let findLastIndexArrayNumbers = arrayNumbers.findLastIndex(num => num % 3 === 0); //5 - индекс числа 12
    console.log(findLastIndexArrayNumbers);
}

/*findLast() - возвращает последний элемент массива, который удовлетворяет переданной функции проверки.
 Если ни один элемент не удовлетворяет условию, возвращается undefined.*/
function findLastArray() {
    let findLastArrayNames = arrayNames.findLast(item => item[1].toLowerCase() === 'r'); //Drake
    console.log(findLastArrayNames);
}

/*indexOf() - возвращает индекс первого вхождения указанного значения в массив. 
Если элемент не найден, возвращается -1.*/
function indexOfArray() {
    let arrayNumbers = [1, 2, 4, 3, 8, 12, 4]; // Добавим в массив ещё одну 4
    let indexOfArrayNumbers = arrayNumbers.indexOf(4); // 2 - первый индекс числа 4
    console.log(indexOfArrayNumbers);
}

/*lastIndexOf() - возвращает индекс последнего вхождения указанного значения в массив. 
Поиск ведётся с конца массива к началу. Если элемент не найден, возвращается -1.*/
function lastIndexOfArray() {
    let arrayNumbers = [1, 2, 4, 3, 8, 12, 4]; // Добавим в массив ещё одну 4
    let lastIndexOfArrayNumbers = arrayNumbers.lastIndexOf(4); // 6 - последний индекс числа 4
    console.log(lastIndexOfArrayNumbers);
}

/*fill() - позволяет заполнить все элементы массива одним значением 
или заданным значением в определённом диапазоне.*/
function fillArray() {
    let fillArrayNumbers = arrayNumbers.fill(2); // arrayNumbers = [2, 2, 2, 2, 2, 2];
    console.log(fillArrayNumbers);

    let fillArrayNames = arrayNames.fill('William', 1, 3); //(нач. значение для заполнения, нач. индекс(вкл.), конеч. индекс(не вкл.))
    console.log(fillArrayNames); // ['John', 'William', 'William']
}

/*some() - проверяет, удовлетворяет ли хотя бы один элемент массива указанному условию.*/
function someArray() {
    let someArrayNames = arrayNames.some(item => item[0].toLowerCase() === 'd'); //true
    console.log(someArrayNames); 
}

/*every() - проверяет, удовлетворяют ли все элементы массива указанному условию.*/
function everyArray() {
    let everyArrayNumbers = arrayNumbers.every(num => num % 2 === 0); //false
    console.log(everyArrayNumbers);
}

/*sort() - Сортирует элементы массива по умолчанию в лексикографическом порядке или с использованием функции сравнения.*/
function sortArray() {
    let sortArrayNumbers = arrayNumbers.sort((a, b) => a - b); //[1, 2, 3, 4, 8, 12]
    console.log(sortArrayNumbers);

    let sortArrayNames = arrayNames.sort(); //['Bob', 'Drake', 'John']
    console.log(sortArrayNames);
}

/*toSorted() - создаёт новый массив, отсортированный в порядке, указанном функцией сортировки, 
при этом оригинальный массив не изменяется.*/
function toSortedArray() {
    arrayNames.toSorted(); // копия отсортированного массива
    console.log(arrayNames); // массив не изменяется
}

/*join() - объединяет все элементы массива в строку, используя указанный разделитель.*/
function joinArray() {
    let joinArrayNames = arrayNames.join(' / '); //John / Drake / Bob
    console.log(joinArrayNames);
}

/*reverse() - изменяет порядок элементов в массиве на обратный.*/
function reverseArray() {
    let reverseArrayNumbers = arrayNumbers.reverse(); //[12, 8, 3, 4, 2, 1]
    console.log(reverseArrayNumbers);
}

/*toReversed() - создаёт новый массив с элементами, отсортированными в обратном порядке, без изменения исходного массива.*/
function toReversedArray() {
    arrayNumbers.toReversed(); // Здесь массив отсортируется в обратном порядке
    console.log(arrayNumbers); // Вывод будет без изменения исходного массива - [1, 2, 4, 3, 8, 12]
}

/*includes()- проверяет, содержит ли массив определённое значение. */
function includesArray() {
    let includesArrayNames = arrayNames.includes('John'); //true
    console.log(includesArrayNames);
}

/*reduce() - сводит массив к одному значению, применяя функцию к каждому элементу (например, для суммирования).*/
function reduceArray() {
    let reduceArrayNumbers = arrayNumbers.reduce((acc, num) => acc * num, 1); //2304
    console.log(reduceArrayNumbers);
}

/*reduceRight() - работает аналогично методу reduce(), но обрабатывает элементы массива с конца к началу.*/
function reduceRightArray() {
    let reduceRightArrayNumbers = arrayNumbers.reduceRight((acc, num) => {
        return num % 2 === 0 ? acc * num : acc;
    }, 1); //768
    console.log(reduceRightArrayNumbers);
}

/*shift() - удаляет первый элемент массива и возвращает его.*/
function shiftArray() {
    let shiftArrayNames = arrayNames.shift(); //John
    console.log(shiftArrayNames);
}

/*unshift() - добавляет элемент(ы) в начало массива.*/
function unshiftArray() {
    arrayNames.unshift('William'); // ['William', 'John', 'Drake', 'Bob']
    console.log(arrayNames);
}

/*forEach() - выполняет функцию для каждого элемента массива. */
function forEachArray() {
    let forEachArrayNumbers = arrayNumbers.forEach((num)=>{
        console.log(num ** 2);
    }); 
}

/*splice() - изменяет массив: может удалять, добавлять или заменять элементы. */
function spliceArray() {
    arrayNames.splice(0, 1); //удаление 1-го элемента начиная с индекса 0
    arrayNumbers.splice(0, 2, 7, 10); //Удаление  2 элементов, начиная с индекса 0, добавление 7 и 10
    console.log(arrayNames); //['Drake', 'Bob']
    console.log(arrayNumbers); // [7, 10, 4, 3, 8, 12]
}

/*toSpliced() создаёт копию массива, в которую вносятся изменения с использованием функционала splice(). 
Оригинальный массив не изменяется.*/
function toSplicedArray() {
    arrayNumbers.toSpliced(2, 0, 'b', 'g'); //копия массива, используя splice
    console.log(arrayNumbers); //массив не изменяется - [1, 2, 4, 3, 8, 12]
}

/*slice() - возвращает новый массив, содержащий копию части исходного массива.*/
function sliceArray() {
    let sliceArrayNumbers = arrayNumbers.slice(1, 4); //[2, 4, 3]
    console.log(sliceArrayNumbers);
}

/*push() - добавляет элемент(ы) в конец массива.*/
function pushArray() {
    arrayNames.push('Tomas'); // ['John', 'Drake', 'Bob', 'Tomas']
    console.log(arrayNames);
}

/*pop() - удаляет последний элемент из массива и возвращает его.*/
function popArray() {
    arrayNames.push('Tomas');
    let popArrayNames = arrayNames.pop(); 
    console.log(popArrayNames);
}

/*concat() - соединяет два или более массива.*/
function concatArray() {
    let concatArray = arrayNames.concat(arrayNumbers); //['John', 'Drake', 'Bob', 1, 2, 4, 3, 8, 12]
    console.log(concatArray);
}

/*delete — это оператор, который удаляет свойство объекта или элемент массива. 
Однако он не изменяет длину массива. Вместо этого элемент становится undefined.*/
function deleteArray() {
    delete arrayNames[2]; // ['John', 'Drake', empty]
    console.log(arrayNames);
}

/*Array.from() - создаёт новый массив из итерируемого объекта 
(например, строки, множества, карты и т.д.).*/
function fromArray() {
    let str = 'I am a programmer';
    let array = Array.from(str).filter(char => char !== ' '); // ['I', 'a', 'm', 'a', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r']
    console.log(array);
}

/*Array.isArray() проверяет, является ли переданное значение массивом, и возвращает true или false.*/
function isArrayArray() {
    let isArrayNumbers = Array.isArray(arrayNumbers); //true
    console.log(isArrayNumbers);
}

/*flat() - "выравнивает" вложенные массивы на указанную глубину. По умолчанию глубина равна 1.*/
function flatArray() {
    let arrayNumbers = [1, 2, [4, [3, 8]], 12];
    let flatArrayNumbers = arrayNumbers.flat(0); // [1, 2, 4, Array(2), 12]
    let flatArrayNumbers2 = arrayNumbers.flat(2); // [1, 2, 4, 3, 8, 12]
    console.log(flatArrayNumbers);
    console.log(flatArrayNumbers2);
}

/*valueOf() - метод valueOf() возвращает сам массив. 
Обычно используется для внутреннего представления объектов.*/
function valueOfArray() {
    let valueOfArrayNames = arrayNames.valueOf();
    console.log(valueOfArrayNames);
}

/*copyWithin() - копирует часть массива в пределах самого массива и вставляет её на новое место. 
Это происходит "на месте", не изменяя длину массива.*/
function copyWithinArray() {
    let arrayNumbers = [1, 2, 5, 4, 8, 12];
    arrayNumbers.copyWithin(0, 3); // Копируются элементы с индекса 3 (4) до конца массива ([8, 12]).
   // Эти элементы вставляются начиная с индекса 0, перезаписывая исходные элементы.
    console.log(arrayNumbers); //  [4, 8, 12, 4, 8, 12]
}

/*with() - позволяет создать новый массив с изменённым элементом на определённой позиции, 
при этом оригинальный массив остаётся неизменным. Этот метод появился в ECMAScript 2022.*/
function withArray() {
    let withArrayNumbers = arrayNumbers.with(4, 11); //Меняем элемент с индексом 4 на 11
    console.log(withArrayNumbers); // [1, 2, 4, 3, 11, 12] (копия)
    console.log(arrayNumbers); // Вывод неизменённого массива - [1, 2, 4, 3, 8, 12]
}

/*at() - возвращает элемент массива по заданному индексу. 
Он также поддерживает отрицательные индексы для доступа к элементам с конца массива.*/
function atArray() {
    console.log(arrayNumbers.at(2)); // 4 - элемент с индексом 2
    console.log(arrayNames.at(-2)); // Drake - предпоследний элемент массива
}

/*toString() - возвращает строковое представление массива, где все элементы объединяются через запятую.*/
function toStringArray() {
    let toStringArrayNumbers = arrayNumbers.toString(); // 1,2,4,3,8,12
    console.log( toStringArrayNumbers);
}

/*toLocaleString() - возвращает строковое представление массива, но позволяет учитывать локальные настройки для каждого элемента (например, формат чисел, дат и т.д.).*/
function toLocalStringArray() {
    let array = [1234567.89, new Date()];
    let toLocalStringArray = array.toLocaleString('en-US'); // 1,234,567.89,9/12/2024, 12:06:48 PM
    console.log(toLocalStringArray);
}

/*keys() - возвращает новый итератор, который содержит ключи (индексы) всех элементов массива.*/
function keysArray() {
    let keysArrayNumbers = arrayNumbers.keys();
    for (let key of keysArrayNumbers) {
        console.log(key); // 0, 1, 2, 3, 4, 5
    }
}

/*flatMap() - объединяет функциональность map() и flat(), применяя сначала функцию преобразования 
к каждому элементу, а затем "выравнивая" полученные вложенные массивы на один уровень.*/
function flatMapArray() {
    let flatMapArrayNumbers = arrayNumbers.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 4, 8, 3, 6, 8, 16, 12, 24]
    console.log(flatMapArrayNumbers);
}
