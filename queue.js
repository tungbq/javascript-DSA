// Queue

// Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle.
// enqueue, dequeue, front, size, isEmpty
function Queue() {
  collection = [];
  
  this.print = function () {
    console.log(collection);
  }

  this.enqueue = function(element) {
    collection.push(element);
  }

  this.dequeue = function() {
    return collection.shift();
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function () {
    return collection.length;
  }

  this.isEmpty = function () {
    return (collection.length === 0);
  }
}

let queue = new Queue()
console.log('Is empty? ', queue.isEmpty())

queue.enqueue('1')
queue.print()

queue.enqueue('2')
queue.enqueue('3')
queue.print()

console.log('Front: ', queue.front())
console.log(queue.dequeue())
console.log(queue.dequeue())
