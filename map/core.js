function multiplyBy10 (arr) {
  return arr.map ((element)=>{
    return element * 10
  })
}

function shiftRight (arr) {
  // return arr.map((element)=>{
  //   let new_index
  //   if (new_index === -1){
  //     new_index = arr.length -1
  //     arr[new_index] = element
  //   } else {
  //     arr[new_index] = element
  //   }
  // })
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
