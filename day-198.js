// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
};

// Alternative Method
function remove(s,n){
  return s.split('').filter(c => c != '!' || n-- <= 0).join('');
};

// Alternative Method 2
remove =(s,n)=>n>0? remove(s.replace('!', ''), n-1):s