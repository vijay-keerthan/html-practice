const arr = [];
function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return arr;
  }
  else{
    arr.push(startNum);
    rangeOfNumbers(startNum+1, endNum);
  }
  return arr;

};
