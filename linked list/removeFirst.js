class Node {
  constructor() {
    this.next = null;
    this.data = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.currentSize = 0;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  addFirst(data) {
    let node = new Node();
    node.data = data;
    node.next = this.head;
    this.head = node;
    this.currentSize++;
  }

  removeFirst() {
    if (!this.head) {
      return;
    } else if (this.currentSize == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.currentSize--;
  }

  getSize() {
    return this.currentSize;
  }
}

let l1 = new LinkedList();
l1.addFirst(3);
l1.addFirst(2);
l1.addFirst(1);
console.log("size - ", l1.getSize());
l1.removeFirst();
console.log("size - ", l1.getSize());
l1.display();
