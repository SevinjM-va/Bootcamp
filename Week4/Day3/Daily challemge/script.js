
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

let getCarHonda = inventory.filter((carInventory, index)=> index === 2).map((carInventory)=> `This is a ${carInventory.car_make} ${carInventory.car_model} from ${carInventory.car_year}`);

// !!! filter edib butun hondolari goturub daha sonra indexle 1 ci elementi secmek daha uygundur
console.log(...getCarHonda);




// Part 2


let sortCarInventoryByYear = inventory.sort((a, b) => {return a['car_year'] - b['car_year']});

console.log(sortCarInventoryByYear);

