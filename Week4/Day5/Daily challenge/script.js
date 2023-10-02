

// !!!özüm edə bilmədim. Çox çətiniydi həllinə baxdım. Ancaq sonra özüm yazdıqdan sonra başa düşdüm

function anagram (stg1, stg2){

  // !!! burada parametr sehv idi menimsedilen variable yerine argumentler istifade olunmusdu
  const string1 = stg1.toLowerCase().split(' ').join('');/* sozun arasindaki space leri silir */
  const string2 = stg2.toLowerCase().split(' ').join('');

  if(string1.length!=string2.length){return false}


  let total = {}; /* total objectinde her sozun herfine uygun key elave olunacaq */


  for(let letter of string1){
    total[letter] = total[letter] + 1 || 1 /*eger herf yoxdursa 1 varsa hemin say +1   */
    
    }
  for(let letter of string2){
    total[letter] = total[letter]? total[letter] - 1 : -1;
    /* objectin keyleri ile ikinci sozun herflerini muqayise edir
    eger hemin herfden varsa saydan bir cixir yox umumiyyetle hemin herf yoxdursa -1  */
  }
  
  let result = Object.values(total) /* butun valuelari yeni saylari goturur array icerisinde */
  // console.log(result)
    console.log('🚀 ~ file: script.js:13 ~ anagram ~ total:', total);

  // !!! Yalniz bu aşağıdakı catmır mənə
  return !result.some((num) => num != 0);/* result.every((num)=>num===0) */
 
  /* functiondaki mentiqe gore eger eded 0 beraberdise bu hemin herfin her ikisinde eyni sayda oldugunu gosterir
  eger 1 e beraberdise bu birinci sozdeki herfin ikincide olmadigini gosterir
  son olaraq -1 e beraberdise bu ikinci sozdeki herfin birincide olmadigini gosterir
  
  some 0 a beraber olmayan ededleri goturur eger 1 value bele -1 ve ya 1 e beraberdise bu hansisa herfin olmadifigini gosterir
  bele olan halda true oturur lakin functionun mentiqine esasen eger sozler anagram deyilse false vermelidir
 buna gore some true oturerse not true operatorundan istifade edirik*/
  }

console.log(anagram("Abc","acb"));
