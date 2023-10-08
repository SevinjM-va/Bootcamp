

const selector1 = document.getElementById('select1');
const selector2 = document.getElementById('select2');
const amountInput = document.getElementById('amount');
const showResult = document.getElementById('showResult');


const btn = document.getElementById('submit');

async function convert(e){
  e.preventDefault();
  var reg = /^\d+$/;
  a = selector1.value.slice(0, 3);
  b = selector2.value.slice(0, 3);
  await api2(a, b);
}


const api2 = async (a, b)=>{
  const url = await fetch(`https://v6.exchangerate-api.com/v6/ebe49070d689ee836f2c13a9/pair/${a}/${b}`);
  const changeJS = await url.json();
  const result = changeJS.conversion_rate * amountInput.value;
  showResult.textContent = result.toFixed(2);
}


 const api1 = async ()=>{
  const url = await fetch('https://v6.exchangerate-api.com/v6/ebe49070d689ee836f2c13a9/codes');
  const changeJS = await url.json();
  const arr = changeJS.supported_codes;

  for (let i = 0; i < arr.length; i++){
    const option = document.createElement('option');
    option.value = arr[i];
    option.text = arr[i];
    selector1.appendChild(option);
  }
  for (let i = 0; i < arr.length; i++){
    const option = document.createElement('option');
    option.value = arr[i];
    option.text = arr[i];
    selector2.appendChild(option);
  }
}
api1();




btn.addEventListener('click', convert);