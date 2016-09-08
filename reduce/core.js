function sum (arr) {
  return arr.reduce((pVal, cVal)=>{
    return pVal + cVal
  })
};

function productAll (array) {
  return array.reduce(function (product, row) {
    product *= row.reduce(function (prev, curr) {
      return prev * curr;
    });

    return product;
  }, 1);
}

function productAll (parentArr) {
  return parentArr.reduce((total, element)=>{
    total *= element.reduce((pVal, cVal)=>{
      return pVal * cVal
    })
    return total
  }, 1)
};

function objectify (parentArr) {
  return parentArr.reduce(function (childArr, element) {
    childArr[element[0]] = element[1];
    return childArr;
  }, {});
}

function luckyNumbers (arr) {
  return arr.reduce((string, num, idx, stringArr)=>{
    if (idx !== stringArr.length -1){
      return string += (num + ', ')
    } else {
      console.log(stringArr);
      return string += ('and ' + num)
    }
  }, 'Your lucky numbers are: ')
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
