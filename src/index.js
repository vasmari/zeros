function countFactors (divisible, divisor) {
  //

  let divisionResult;
  let countResult = 0;
 
  if ((divisible % divisor) == 0) {
    divisionResult = divisible;
    do {
      divisionResult = divisionResult / divisor;
      countResult = countResult + 1;      
    } while ((divisionResult >= divisor) && ((divisionResult % divisor) == 0));
  }
  
  return countResult;
}




module.exports = function zeros(expression) {

  let counter2 = 0;
  let counter5 = 0;

  let arr = expression.split('*');

  for (let i=0; i < arr.length; i++) {
    let arr2 = arr[i].split('!');
    let b = arr2[0];


    // Check for !!    
    if (arr2[arr2.length-2] == '') {
      
      for (let j = b; j > 1; j=j-2) {
        counter2 = counter2 + countFactors (j, 2);
        counter5 = counter5 + countFactors (j, 5);
      }    
    } else {
      for (let j = b; j > 1; j=j-1) {
        counter2 = counter2 + countFactors (j, 2);
        counter5 = counter5 + countFactors (j, 5);
      }
      }
    }
  
  return Math.min (counter2, counter5);
}
