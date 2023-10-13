
// Ex 1
let obj1 = {
  fullName: "Sevda",
  mass: 55,
  height: 1.60,
  calculate_BMI: function (){
    let calc1 = Math.round( this.mass / (this.height * this.height));
    console.log(calc1)
    return calc1
}
}

let obj2 = {
  fullName: "Kənan",
  mass: 95,
  height: 1.80,
  calculate_BMI: function (){
    let calc2 = Math.round(this.mass / (this.height * this.height));
    return calc2
  }
  
}

function compare(){

  let func1 = obj1.calculate_BMI();
  let func2 = obj2.calculate_BMI();
  console.log(func2)

  if(func1 > func2){
    console.log(`${obj1.fullName} has the largest BMI is: ${func1}`);
  } else if (func2 > func1){
    console.log(`${obj2.fullName} has the largest BMI is: ${func2}`)
  } else {
    console.log(`Both have the same BMI of  ${func2}`)
  }
}

compare()
  

// Ex 2


let arr = [20, 80, 70, 10, 60, 40, 300]

function findAvg(gradesList){
  let total = 0;
  console.log(gradesList.length);
  for (let i = 0; i < gradesList.length; i++){
    total = (gradesList[i]+ total);
  }
  total = Math.round(total / gradesList.length);
  console.log(total);
  result(total)
  
}

function result(total){
  if (total > 65){
    console.log('Passed')
  } else {
    console.log('Failed. Repeat the course!')
  } 
}


findAvg(arr)