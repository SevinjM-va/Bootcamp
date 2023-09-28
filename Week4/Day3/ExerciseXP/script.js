// Ex1

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
const country = "USA";
console.log([...country]);

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);



// Ex2

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let welcomeStudents  = users.map((value) => 'Hello '+ value.firstName);
console.log(welcomeStudents);


let onlyFullStackResidents = users.filter((value)=>value.role === 'Full Stack Resident');

let onlyFullStackResidentss = onlyFullStackResidents.map((value) => 'Hello '+ value.firstName);

console.log(onlyFullStackResidentss);




// Ex 3

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let combine = epic.reduce((akk, index)=>{
  return akk + ' '+ index;
});
console.log(combine);


// Ex 4

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passingStudent = students.filter((value)=> value.isPassed == true).map((value)=>`Good job ${value.name}, you passed the course in ${value.course}`);

console.log(passingStudent);