// Training JS #9: loop statement --while and do..while
function padIt(str,n){
    let i = 0;
  let result = [str];

  while(n > i) {
    if (i % 2 === 0) {
       result.unshift('*');
       i++
    } else {
       result.push('*');
       i++
    }
  }

  return result.join('');
};

// Alt Method
function padIt(str, n) {
    while (n > 0) {
      str = n-- % 2 ? '*' + str : str + '*';
    }
    return str;
};

// Sample Tests
describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(padIt("a",1),"*a");
      Test.assertSimilar(padIt("a",2),"*a*");
      Test.assertSimilar(padIt("a",3),"**a*");
      Test.assertSimilar(padIt("a",4),"**a**");
      Test.assertSimilar(padIt("a",5),"***a**");
    });
  });
  