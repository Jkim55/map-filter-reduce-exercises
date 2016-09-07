function onlyEven (arr) {
  return arr.filter((element)=>{
    return (element % 2 === 0)
  })
};

function onlyOneWord (arr) {
  return arr.filter((words)=>{
    return words.split(" ").length === 1
  })
};

// function positiveRowsOnly (arr) {
//   return nestedArr.filter((arr)=>{
//     var returnVal = true
//     for(var i=0; i<arr.length; i++){
//       if (arr[i] < 0){
//         returnVal = false
//       }
//     }
//     return returnVal
//   })
// }

function positiveRowsOnly (arr) {
  return arr.filter((row)=>{
    return row.filter((num)=>{
      return num > 0
    }).length === row.length
  })
}

function allSameVowels (arr) {
  array.filter((word)=>{
    let vowels = ['a', 'e', 'i', 'o', 'u']
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
