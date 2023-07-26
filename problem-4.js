//Problem 4:

function indicesArray(arr, targetvalue) {
    let targetarr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetvalue) {
          targetarr = [arr.indexOf(arr[i]), arr.indexOf(arr[j])];
          break;
        }
      }
    }
    return targetarr.sort((a, b) => {
      return a - b;
    });
  }
  
  console.log(indicesArray([1, 3, 6, 8, 11, 15], 9));