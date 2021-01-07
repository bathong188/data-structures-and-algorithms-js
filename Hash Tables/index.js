let user = {
  age: 54,
  name: "Kyle",
  magic: true,
  scream: function () {
    console.log("ahhhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// In hash tables, collisions occur --> slow down access O(n/k)

const a = new Map();
const b = new Set();

// Implementing hash tables

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // underscore marks private variable
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // memory address
    let address = this._hash(key);
    // address space is empty
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    // collision --> add to array
    this.data[address].push([key, value]);
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1), if no collision
}

const myHashTable = new HashTable(50);
// set
myHashTable.set();
// get
