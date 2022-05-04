// Calculate Average (Array)
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

  // Alternative Method
  const find_average = (arr) => !arr || arr.length === 0 ? 0 : arr.reduce((acc,curr) => acc + curr, 0) / arr.length;