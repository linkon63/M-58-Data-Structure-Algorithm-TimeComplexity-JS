class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList{
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next  = newNode;
    }
}

const head = new Node(1500);
const linkedList = new LinkedList(head);
 
linkedList.add(27);
linkedList.add(37);
linkedList.add(67);
linkedList.add(68);
linkedList.add(36);

console.log('Linked List is : ', JSON.stringify(linkedList));



