

//Problem 8:

function second_smallest(array) {
    let sortedarr = array.sort((a, b) => a - b);
    return sortedarr[1];
  }
  
  console.log(second_smallest([1,4,7,8,2,4,9,100,200]));