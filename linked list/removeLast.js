class Node {
  constructor() {
    this.next = null;
    this.data = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.currentSize++;
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = null;
      let curr = this.head;
      while (curr != this.tail) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      prev.next = null;
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
l1.removeLast();
l1.display();
