// Basic Node Data Structure
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
        // Ensures the node arguement is a Node object or null
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  module.exports = Node;