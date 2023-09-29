

// !!!özüm edə bilmədim. Çox çətiniydi həllinə baxdım. Ancaq sonra özüm yazdıqdan sonra başa düşdüm

function anagram (string1, string2){
  const st1 = string1.toLowerCase().split(' ').join('');
  const st2 = string2.toLowerCase().split(' ').join('');

  let total = {};

  for(let letter of string1){
    total[letter] = total[letter] + 1 || 1
    
    }
  for(let letter of string2){
    total[letter] = total[letter]? total[letter] - 1 : -1;
  }
  
  let result = Object.values(total)
  console.log(result)

  // !!! Yalniz bu aşağıdakı catmır mənə
  return !result.some((num)=> num != 0)
  }

anagram("Astronomer","Moon starer");