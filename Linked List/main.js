`use strict`;
// implment 10 --> 5 --> 16

// let myLinkedList =  {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  // add to end of list
  append(value) {
    const newNode = new Node(value);
    // old tail
    this.tail.next = newNode;
    // new tail
    this.tail = newNode;
    this.size++;
    return this;
  }
  // add to head of list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }
  insert(index, value) {
    if (index >= this.size) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    // node to insert
    const newNode = new Node(value);
    // node before specified index
    const prevNode = this.traverseToIndex(index - 1);
    const holdCurrentNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = holdCurrentNode;
    this.size++;
    return this;
  }
  remove(index) {
    const prevNode = this.traverseToIndex(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.size--;
    return nodeToDelete;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();

myLinkedList.insert(2, 69);
myLinkedList.printList();

myLinkedList.remove(3);
myLinkedList.printList();

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  // add to end of list
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    // old tail
    this.tail.next = newNode;
    // new tail
    this.tail = newNode;
    this.size++;
    return this;
  }
  // add to head of list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
    return this;
  }
  insert(index, value) {
    if (index >= this.size) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    // node to insert
    const newNode = new Node(value);
    // node before specified index
    const prevNode = this.traverseToIndex(index - 1);
    const holdCurrentNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = holdCurrentNode;
    holdCurrentNode.prev = newNode;
    this.size++;
    return this;
  }
  remove(index) {
    const prevNode = this.traverseToIndex(index - 1);
    const nodeToDelete = prevNode.next;
    const nextNode = nodeToDelete.next;
    prevNode.next = nodeToDelete.next;
    nextNode.prev = nodeToDelete.prev;
    this.size--;
    return nodeToDelete;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}
