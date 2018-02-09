function piglatin(array){
  let returnedArray=_.map(array, function(array1){
      return array1+='-ay';
  });
  return returnedArray;
}
console.log(piglatin(['apple', 'pear']));
console.log(piglatin(['you', 'can', 'win']));