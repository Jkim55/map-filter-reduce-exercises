function onlyEven (arr) {
  let new_arr = arr.filter((element)=>{
    return (element % 2 === 0)
  })
  return new_arr
};

function onlyOneWord (arr) {
  let new_arr = arr.filter((words)=>{
    return words.split(" ").length === 1
  })
  return new_arr
};

function positiveRowsOnly (nestedArr) {
  let new_nestedArr = nestedArr.filter((arr)=>{
    var returnVal = true
    for(var i=0; i<arr.length; i++){
      if (arr[i] < 0){
        returnVal = false
      }
    }
    return returnVal
  })
  return new_nestedArr
}

function allSameVowels (arr) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
