// Creating a linked list using class which contains numbers(assumption)

class Node {
  constructor() {
    this.next = null;
    this.data = 0;
  }
  
}


// mock list created

let start = new Node();
start.data = 2;
start.next = new Node();
start.next.data = 3;
start.next.next = new Node();
start.next.next.data = 4;


// traversing the mock list
let t = start;

while(t.next!=null){
    console.log(t.data);
    t = t.next
}