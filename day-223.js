// Wilson primes
function amIWilson(p) {
    return p==5 || p==13 || p==563
};

// Alternative Method
const amIWilson = p => [5, 13, 563].indexOf(p) > -1

// Alternative Method 2
function amIWilson(p) {
    p = BigInt(p);
    const fac = n => n ? n * fac(n-1n) : 1n;
    const d = (fac(p-1n) + 1n);
    return !(d % (p * p));
};