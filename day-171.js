// Smallest unused ID
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
function nextId(ids){
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
};

// Alternative Method
function nextId(ids){
    const used = new Set(ids);
    for (let i = 0; i <= ids.length; i++) {
      if (!used.has(i)) return i;
    }
};

// Alternative Method 2
nextId = ids => ids.sort((a,b) => a -b).reduce((prev,curr) => prev + (prev == curr), 0)