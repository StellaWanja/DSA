// hashtables/hash maps are used to store key-value pairs
// are like arrays, but the keys are not ordered
//are fast for finding values, adding new values, and removing values
// in python -> dictionaries, javascript -> Objects and Maps
//Hash tables are used for
// • Modeling relationships from one thing to another thing
// eg lookups on a much larger scale eg translate adit.io to an IP address(DNS resolution)
// • Filtering out duplicates
// eg finding entries in a large database to find if entry exists
//• Caching/memorizing data instead of making your server do work
// eg in caching to easily retrieve data

//hash function ->  a function that converts keys into valid array indices, to be able to look up values by kry
//what makes a good hash
// 1. Needs to be fast(constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic/ consistent (same input yields same output)

//prime numbers are used to help spread out the keys more uniformly
// it's also helpful if the array you're putting values into has a prime length

// big(0) is dependent on how good a hash function is
//average and best case of insertion, accessing, deletion -> O(1)
// with a bad hash function eg one that puts everything in one slot -> O(n)

// hash that works on strings only
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    //map a to 1, d to 4, z to 26
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("blue", 13));
console.log(hash("cyan", 13)); 
console.log(hash("maroon", 13));
console.log(hash("red", 13));
console.log(hash("pink", 13)); 

