function multiplyBy10 (arr) {
  return arr.map ((element)=>{
    return element * 10
  })
}

function shiftRight (array) {
  return array.map((val, index, arr)=>{
    return arr[index-1] || arr[arr.length-1];
  })
};


function onlyVowels (wordArr) {
  return wordArr.map ((word)=>{
    return word.match(/[aeiou]/gi).join('')
  })
};


function doubleMatrix (parentArr) {
  return parentArr.map ((numArr)=>{
    return numArr.map((num)=>{
      return num * 2
    })
  })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
