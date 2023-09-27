


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

  // !!! groceries variable-in value-su array oldugu ucun object reference olunur.
  // !!! bu zaman shopping array-in value-su hemin deyerin ramda yerlesdiyi yer yazilir
  // !!! her iki variable eyni obyekti gosterir
  // !!! shopping uzerinde edilen deyisiklikler eyni 1  ortaq deyer oldugu ucun her iki variable gosterecek

  shopping.totalPrice = '35$';
  shopping.other.paid = false;
  console.log(shopping);
  console.log(groceries); 
  // !!!
  return shopping;
}
console.log(cloneGroceries());


