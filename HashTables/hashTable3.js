//create a function to hash firstName to a number
function hashStringToNum(string, tableSize){
    hash = 17; //set num to a prime number

    for(let i=0; i<string.lenth; i++){
        hash = (13 * hash * string.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable{

    //create array with specific size
    table = new Array(17);

    //sets the key and value
    setItem = (key,value) => {
        const idx = hashStringToNum(key, this.table.length);
        if(this.table[idx]){
            this.table[idx].push([key,value]);
        } else {
            // incase of a collision, use separate chaining
            this.table[idx] = [[key, value]];
        }
    }

    //gets key and returns value
    getItem = (key) => {
        const idx = hashStringToNum(key, this.table.length);
        if(!this.table[idx]) return null;
        return this.table[idx].find(x => x[0] === key);
    }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Bob');
myTable.setItem('lastName', 'Tim');
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));