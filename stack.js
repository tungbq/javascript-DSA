// Stack

// push, pop, peak, length

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // Add a variable onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.counts];
    return result;
  }

  this.size = function () {
    return this.count
  }


  this.peek = function () {
    return this.storage[this.count-1]
  }
}

// Check
var mystack = new Stack()

mystack.push("elmt-1")
mystack.push("elmt-1")
mystack.push("elmt-2")

console.log(mystack)
mystack.push("elmt-2")
mystack.push("elmt-3")

console.log(mystack.size())
console.log(mystack.peek())
console.log(mystack)
