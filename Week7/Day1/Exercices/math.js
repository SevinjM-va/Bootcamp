
// function add(a,b){
// console.log(a+b)
// }

// module.exports = add;

// const name = 'Sevinj';
// const car = 'KIA'

// module.exports.name = name;
// module.exports.car = car;

function make_pizza(size, ...toppings) {
  console.log(`\nMaking a ${size}-inch pizza with the following toppings:`)
  for (topping of toppings) {
      console.log(topping)
  }
}

module.exports = {make_pizza}