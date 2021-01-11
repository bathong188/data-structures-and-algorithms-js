`strict`;

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
      // looping thru current bucket, might have multiple items
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    }
    // nothing in the bucket
    return undefined;
  } // O(1), if well optimized

  // downsides: has to loop thru the whole map, unordered
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // if there's something in memory space
        console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50); // number of mem spaces
// set
myHashTable.set("apples", 69);
myHashTable.set("pears", 44);
myHashTable.set("oranges", 420);
myHashTable.set("grapes", 100);

// get
myHashTable.get("apples");
// gettings keys
myHashTable.keys();
