//Problem 3:

function mostFrequent(arr) {
    let maxcount = 0;
    let mostFrequentElement;
    let obj = {};
    for (const x of arr) {
      if (obj[x]) {
        obj[x]++;
      } else {
        obj[x] = 1;
      }
  
      if (obj[x] > maxcount) {
        maxcount = obj[x];
        mostFrequentElement = x;
      }
    }
  
    return mostFrequentElement;
  }
  
  console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));