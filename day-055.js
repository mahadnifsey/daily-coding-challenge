// Total amount of points
function points(games) {
    let answer = 0
      for(const score of games) {
          const arr = score.split(":")
          if(Number(arr[0]) > Number(arr[1])) {
              answer += 3
          } else if (Number(arr[0]) == Number(arr[1])) {
              answer += 1
          }
      }
  
      return answer
  };

  // Alternative Method
  const points = a => a.reduce((r, e) => {
    const x = e[0];
    const y = e[2];
    return r + (x > y ? 3 : x < y ? 0 : 1);
  }, 0);
  
  // Alternative Method 2
  const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);

