class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findStart(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

function printLinkedList(head, limit = 20) {
    let count = 0;
    while (head && count < limit) {
        console.log(head.val);
        head = head.next;
        count++;
    }
}

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> (cycle back to 4)
let l = new LinkedList(1);
l.next = new LinkedList(2);
l.next.next = new LinkedList(3);
l.next.next.next = new LinkedList(4);
l.next.next.next.next = new LinkedList(5);
l.next.next.next.next.next = new LinkedList(6);
l.next.next.next.next.next.next = new LinkedList(8);

// Creating a cycle: Node 8 points back to Node 4
l.next.next.next.next.next.next.next = l.next.next.next;

let le = findStart(l);
console.log("Cycle starts at node with value:", le ? le.val : "No cycle");

// Print the linked list up to a limit to avoid infinite loop
//printLinkedList(l);
