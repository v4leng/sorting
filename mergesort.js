function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];

  let half = Math.round(wholeArray.length / 2);

  firstHalf = wholeArray.slice(0, half);
  secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let result = [];
  let i = 0; // 1
  let j = 0; //0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const [left, right] = split(arr);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}
