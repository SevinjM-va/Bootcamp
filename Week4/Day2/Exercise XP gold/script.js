

// Ex 1
let landscape = () => {

  let result = "";
 
  let flat = (x)=>{
    for(let count = 0; count<x; count++){
      result = result + "_";
      console.log(result)


      
    }
  }
 
  let mountain = (x) => {
    result = result + "/"
    for(let counter = 0; counter<x; counter++){
      result = result + "'"
      console.log(result)
    }
    result = result + "\\"
  }
 
  flat(4);
  mountain(4);
  flat(4)
 
  return result;
 }
 
 landscape()


//  EX 2
const addTo = x => y => x + y;
const addToTen = addTo(10);

addToTen(3);

 console.log(addToTen(3));
//  !!! outcome 13 olacaq  x=10 y= 3
// !!! console.log etdikde functionu call etmediyiniz zaman return-u yox oz icerisinde olan deyeri gosterecek


//  Ex 3


const curriedSum = (a) => (b) => a + b;
curriedSum(30)

console.log(curriedSum(30)(1));/*  console edilen yanlis idi */
// !!! burada da function birinci call edilir 30 gelib dusur a ya 
// !!! a da ikinci funksiya return edir , ikinci defe call edilen zamn 1 gelib dusur b ye
// !!! closure ve currying functionlarda eyni seviyyede oldugu variable lari yadda saxlayir
// !!! buna gore de onceden gelen a in value su 30 yadda qalir 
// !!! sonda a =30 b =1 toplanir 

// Burada curriedSumin parametri nə üçün a funkiyasına verilmir?

// Ex 4

const compose = (f, g) => (a) => f(g(a)); 
const add1 = (num) => num + 1; //11
const add5 = (num) => num + 5; //15
compose(add1, add5)(10)

console.log(compose(add1, add5)(10)); /* console da functionun neticesini gormek ucun call etmek lazimdi */
