
// Ex 1

// !Bunun cavab; düşündüyüm kimi çıxdı ancaq yalnız k=consolda yazıb yoxladım. Console.log-da bəs nə yazmaq lazımdır funksiya adı olaraq?
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});


// Ex 2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// Burada isə acc [1,2] qiyməti alır və ondan başlayır



// Ex 3
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// Burada return num * 2; niyə icra olunmadı?


// Ex 4

// Burda arrayin hansi metodu islenmelidir tapa bilmedim
// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// array.map(...)
// console.log(array)