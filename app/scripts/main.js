

console.log('Allo, Allo!');

function toEven(x){
  var result,
      evenNumber = {};
  if (x%2 === 0){result = x}
  else if (Math.floor(x)%2 === 0) {result = Math.floor(x)+2}
  else {result = Math.floor(x)+1}
  evenNumber.old  = x;
  evenNumber.even = result;
  evenNumber.gap  = result - x;
  return evenNumber;
}

console.log(toEven(25));
