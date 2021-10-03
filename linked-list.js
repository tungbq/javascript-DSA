// Implement linked list

function LinkedList() {
	var length = 0;
	var head = null;

	var Node = function (element) {
		this.element = element;
		this.next = null;
	};

	this.size = function () {
		return length;
	};

	this.head = function () {
		return head;
	};

	this.add = function (element) {
		var node = new Node(element);
		if (head === null) {
			head = node;
		} else {
			var currentNode = head;

			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = node;
		}

		length++;
	};

	this.remove = function (element) {
		var currentNode = head;
		var previousNode;

		if (currentNode.element === element) {
			head = currentNode.next;
		} else {
			while (currentNode.element !== element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}

		length--;
	};

	this.isEmpty = function () {
		return length === 0;
	};

	this.indexOf = function (element) {
		var index = 0;
		var currentNode = new Node(element);

		while (currentNode.next) {
			if (currentNode.element === element) {
				return index;
			}
			index++;
			currentNode = currentNode.next;
		}
		return -1;
	};

	this.elementAt = function (index) {
		var node = head;

		for (let i = 0; i <= index; i++) {
			node = node.next;
		}

		return node.element;
	};

	this.addAt = function (index, element) {
		var node = new Node(element);
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index > length) {
			return false;
		}

		if (index === 0) {
			node.next = currentNode;
			head = node;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			node.next = currentNode;
			previousNode.next = node;
		}
		length++;
	};

	this.removeAt = function (index) {
		var currentNode = head;
		var currentIndex = 0;
		var previousNode;

		if (index === 0) {
			head = currentNode.next;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	};
}

var myLinkedList = new LinkedList();
myLinkedList.add('elmt-1');
myLinkedList.add('elmt-2');
myLinkedList.add('elmt-3');
myLinkedList.add('elmt-4');
myLinkedList.add('elmt-5');

// Check
console.log(myLinkedList.size());
console.log(myLinkedList.removeAt(3));
console.log(myLinkedList.indexOf('elmt-3'));
console.log(myLinkedList.size());
