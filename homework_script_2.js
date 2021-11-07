// 1)
let arr = [543, 'natasha'];
console.log(Array.isArray(arr));

//2
let arr1 = [7, 12, 31, [1, 4, 8]];
console.log(arr1.flat())

//3
let arr = [5, 4, '54321', 3, 2, 1];
console.log(arr[arr.length - 1])

//5
let s = 'nata chkhaidze';
const arr = s.split(' ');
console.log(arr.join(' გახლეჩვა და დაჯოინება '))

//6
let arr = Array.from('Im gonna pop some tags only got twenty dollars in my pocket ');
console.log(arr);

//7
let a = [ 5,7,0,22];
let b = a.pop();
let c = a.unshift(b)
console.log(a);

//8
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
const arr = a.concat(b, c);
console.log(arr);

//9
const s = String.fromCharCode(107)
console.log(s)

// k არის სიმბოლო