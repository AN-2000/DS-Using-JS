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

  addLast(data) {
    let node = new Node();
    node.data = data;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.currentSize++;
  }
}

let l1 = new LinkedList();
l1.addLast(3);
l1.addLast(2);
l1.addLast(1);
l1.display();
