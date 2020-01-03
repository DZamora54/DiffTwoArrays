function diffArray(arr1, arr2) {
  var newArr = [];

  // This function returns the elements of one array that do not exist in a second array by looping through the elements of the first array and checking for their existence in the second array. If an element does not exist it is pushed to an array and that array is returned.
  function isTheElementInTheArray(arr1, arr2) {
    let tempArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0) {
        tempArr.push(arr1[i]);
      }
    }
    return tempArr;
  }

  let checkOneToTwo = isTheElementInTheArray(arr1, arr2);
  let checkTwoToOne = isTheElementInTheArray(arr2, arr1);

  newArr = checkOneToTwo.concat(checkTwoToOne);
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
