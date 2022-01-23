class Node {
  constructor() {
    this.next = null;
    this.data = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
  }
}

let l1 = new LinkedList();
l1.addFirst(3);
l1.addFirst(2);
l1.addFirst(1);
l1.display();
