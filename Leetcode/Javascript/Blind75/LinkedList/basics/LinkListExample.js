// Singly LL Node Example
class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let nodeOne = new ListNode(1);
let nodeTwo = new ListNode(2);
let nodeThree = new ListNode(3);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;

let head = nodeOne;
console.log(head.val);
console.log(head.next.val);
console.log(head.next.next.val);

// Traverse and add all values of LL
let sum = 0;
while (head) {
	sum += head.val;
	head = head.next;
}
console.log(sum);

// or recursively:
let getSum = (head) => {
	if (!head) {
		return 0;
	}

	return head.val + getSum(head.next);
};
console.log(getSum(nodeOne));

// Function to add node
const addNode = (prevNode, nodeToAdd) => {
	nodeToAdd.next = prevNode.next;
	prevNode.next = nodeToAdd;
};

let additionalNode = new ListNode(11);

addNode(nodeTwo, additionalNode);

const traverse = (head) => {
	while (head) {
		console.log(head.val);
		head = head.next;
	}
};

traverse(nodeOne);

// Let prevNode be the node at position i - 1
// So the one before the node to be removed
const removeNode = (prevNode) => {
	prevNode.next = prevNode.next.next;
};

//Doubly linked List
class DLListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

let addDLLNode = (node, nodeToAdd) => {
	let prevNode = node.prev;
	nodeToAdd.next = node;
	nodeToAdd.prev = prevNode;
	prevNode.next = nodeToAdd;
	node.prev = nodeToAdd;
};

let deleteDLLNode = (node) => {
	let prevNode = node.prev;
	let nextNode = node.next;
	prevNode.next = nextNode;
	nextNode.prev = prevNode;
};
