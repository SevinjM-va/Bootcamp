





// // Ex 1
// let i = 0;

// for (i = 0; i <= 15; i++){
//   if (i%2 == 0){
//     console.log(`${i} is even` );
// } else if (i%2 == 1){
//   console.log(`${i} is odd`)
// }
// }



// Ex 2

let names = ["john", "sarah", 23, "Rudolf", 34];


    for (let item of names) {
      // Check if the item is a string
      if (typeof item === "string") {
        // Check if the first letter is not already uppercase
        if (item.charAt(0) !== item.charAt(0).toUpperCase()) {
          // Change the first letter to uppercase
          item = item.charAt(0).toUpperCase() + item.slice(1);
        }
        // Display the modified or original name
        console.log(item);
      } else {
        continue;
      }
    }
    console.log(names);






