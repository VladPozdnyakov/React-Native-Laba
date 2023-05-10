// Имеем массив const arr = [{id:1, text:'aaa'}, {id:2, text:'bbb'}, {id:3, text:'ccc'}]

// Имеем объект const values =  {id:1, text:'ddd'}

//Имеем функцию которая принимает эти данные function replaceData(arr, values)

//Нужно написать функцию, которая будет перебирать массив и сравнивать каждый id его элементов с values.id,
// в случае нахождения такого элемента заменять его на values (arr[i] = values) и возвращать массив в таком виде
// [{id:1, text:'ddd'}, {id:2, text:'bbb'}, {id:3, text:'ccc'}]

let goal = {a: 1, b: 2};

let value = {a: 2, b: 4};

goal = value;

console.log(goal);
