


let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        paid : false,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries= () => {
  let fruits = groceries.fruits;
  fruits.forEach((el)=>{
    console.log(el);
  })
  console.log(fruits);
}

displayGroceries();

const cloneGroceries =()=>{
  let user = client;
  let shopping = groceries;
  return shopping;

}
console.log(cloneGroceries());


