

// !!!özüm edə bilmədim. Çox çətiniydi həllinə baxdım. Ancaq sonra özüm yazdıqdan sonra başa düşdüm

function anagram (string1, string2){
  const st1 = string1.toLowerCase().split(' ').join('');
  const st2 = string2.toLowerCase().split(' ').join('');

  if(string1.length!=string2.length){return false}


  let total = {}; /* total objectinde her sozun herfine uygun key elave olunacaq */


  for(let letter of st1){
    total[letter] = total[letter] + 1 || 1
    
    }
  for(let letter of st2){
    total[letter] = total[letter]? total[letter] - 1 : -1;
    /* objectin keyleri ile ikinci sozun herflerini muqayise edir
    eger hemin herfden varsa saydan bir cixir yox umumiyyetle hemin herf yoxdursa -1  */
  }
  
  let result = Object.values(total) /* butun valuelari yeni saylari goturur array icerisinde */
  // console.log(result)
    console.log('🚀 ~ file: script.js:13 ~ anagram ~ total:', total);

  // !!! Yalniz bu aşağıdakı catmır mənə
  return !result.some((num)=> num != 0);
  }

console.log(anagram("Astronomer","Moon starer"));