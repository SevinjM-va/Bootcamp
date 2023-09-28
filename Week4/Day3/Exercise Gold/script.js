
// Ex 1

// !Bunun cavab; düşündüyüm kimi çıxdı ancaq yalnız k=consolda yazıb yoxladım. Console.log-da bəs nə yazmaq lazımdır funksiya adı olaraq?
const Output = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

// !!! map yeni array oturduyu ucun onun return etdiyi yeni arrayi variable menimsetmek lazimdir
// !!! ve ya butun funksiyani console log un icerisine de yaza bilerik console neyi return edibse onu gosterecek

console.log(Output);

// Ex 2
console.log([[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
))
// Burada isə acc [1,2] qiyməti alır və ondan başlayır



// Ex 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
console.log("🚀 ~ file: script.js:33 ~ newArray ~ newArray:", newArray)
// !!! icra olunur amma yeni array e menimsedir


// Burada return num * 2; niyə icra olunmadı?


// Ex 4

// Burda arrayin hansi metodu islenmelidir tapa bilmedim

// !!! arrayin flat metodu var 
// !!! nested array leri acir parent arrayin icerisine elave edir
// !!! icerisine say parametri qebul edir nece defe flat edilmeli oldugu ucun

// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// array.map(...)
// console.log(array)