// Creating a linked list using class which contains numbers(assumption)

class Node {
  constructor() {
    this.next = null;
    this.data = 0;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.currentSize = 0;
  }

  add(value) {
    let newNode = new Node();
    newNode.data = value;
    newNode.next = null;
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.currentSize = this.currentSize + 1;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  getSize(){
    return this.currentSize
  }

}
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.getSize())
// The complexity to find size of linkedlist = O(n); because we have to go through n elements exactly once that are present in the linked list
// Now we can easily reduce it to O(1) if we keep a variable which tracks number of nodes and increment it everytime we add a node in the list
