/** COLLISION 
    -> happens when two keys have been assigned the same slot
    -> strategies for dealing with collision
      1. Separate chaining
        -> at each index in array we store values using a data structure eg linked list or array
        -> this allows to store multiple key-value pairs at the same index
      2. Linear probing/ open addressing
        -> when we find a collision, we search through the array to find the next empty slot
        -> this allows us to store single key-value pairs at each index
*/
/* in separate chaining, will use get and set
   - in a set ->
    1. Accepts a key and a value
    2. Hashes the key
    3. Stores the key-value pair in the hash table array via separate chaining
   - in a get ->
    1. Accepts a key
    2. Hashes the key
    3. Retrieves the key-value pair in the hash table
    4. If the key isn't found, returns undefined
*/
class HashTable {
  //size of hashtable -> 53
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    //hash key
    let index = this._hash(key);
    //if nothing exists in the index, set it to an empty array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //and push key and value to the index
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    //hash key
    let index = this._hash(key);
    if (this.keyMap[index]) {
      //loop through the index/slot
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //if the key in the slot equals key passed
        if (this.keyMap[index][i][0] === key) {
          //return value
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  //Loops through the hash table array and returns an array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //if slot is not empty
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //to prevent printing duplicate values
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  //Loops through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //if slot is not empty
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //to prevent printing duplicate values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

