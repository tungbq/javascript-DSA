// Implement set

function mySet() {
	var collection = [];

	this.has = function (value) {
		return collection.indexOf(value) !== -1;
	};

	// Return all values
	this.values = function () {
		return collection;
	};

	// This method will add element to set
	this.add = function (element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	};

	// This function will remove an element from a set
	this.remove = function (element) {
		if (this.has(element)) {
			// collection.pop(element) ?
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};

	// This method will return the union of two sets
	this.union = function (otherSet) {
		var unionSet = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values();

		firstSet.forEach(function (e) {
			unionSet.add(e);
		});

		secondSet.forEach(function (e) {
			unionSet.add(e);
		});

		return unionSet;
	};

	// This method will return the intersection of two sets as a new set
	this.intersection = function (otherSet) {
		var intersectionSet = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values();

		firstSet.forEach(function (e) {
			if (secondSet.has(e)) {
				intersectionSet.add(e);
			}
		});

		return intersectionSet;
	};

	// This method will return the difference between 2 sets
	this.difference = function (otherSet) {
		var differenceSet = new mySet();
		var firstSet = this.values();

		firstSet.forEach(function (e) {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});

		return differenceSet;
	};

	// This method will test if a set is a subset of other
	this.subset = function (otherSet) {
		var firstSet = this.values();

		return firstSet.every(function (e) {
			return otherSet.has(e);
		});
	};
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");

setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));

//// https://stackoverflow.com/questions/7340893/what-is-the-difference-between-map-every-and-foreach 