
// Ex 1
const person = {
  name: 'John Doe',
  age: 25,
  location: {
      country: 'Canada',
      city: 'Vancouver',
      coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Ex 2
function displayStudentInfo(objUser){
  //destructuring
  const {first:a, last:b} = objUser;
  console.log (`Your full name is ${a +' '+ b}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Ex 3


const users = { user1: 18273, user2: 92833, user3: 90315 };

let turntoObject = Object.entries(users).map((el) => {
  console.log(el)
  return [el[0],el[1]*2]
});
console.log(turntoObject)


// Ex 4
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member);



// Ex 5
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // answer 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};



// Ex 6

// [2] === [2] false
// {} === {} false


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5




class Animal {
  constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
class Mamal extends Animal{
  constructor(name,type,color){
    super (name,type,color);
  }
  sound() {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mamal('Lily','cow','brown and white');
console.log(farmerCow.sound());

