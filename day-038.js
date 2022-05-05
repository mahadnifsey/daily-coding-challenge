// DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
}

// Alternative Version
const DNAtoRNA = dna => dna.replace(/T/g, 'U');
