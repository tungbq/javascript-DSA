class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//         a
//        / \
//       b   c
//      /\    \
//     d  e    f

// const depthFirstSearch = (root) => {
// 	const stack = [root];
// 	while (stack.length > 0) {
// 		const curr = stack.pop();
// 		// console.log(curr);
// 		console.log(curr.val);

// 		if (curr.right !== null) {
// 			stack.push(curr.right);
// 		}

// 		if (curr.left !== null) {
// 			stack.push(curr.left);
// 		}
// 	}
// }; // O(n) time, O(n) space

const depthFirstSearch = (root) => {
	// the tree is empty
	if (root === null) return;

	console.log(root.val);
	depthFirstSearch(root.left);
	depthFirstSearch(root.right);
}; // O(n) time, O(n) space

console.log('------------------');
console.log('depthFirstSearch');
depthFirstSearch(a);
// abdecf

// pre-order traversal
const preOrder = (root) => {
	// the tree is empty
	if (root === null) return;

	console.log(root.val);
	preOrder(root.left);
	preOrder(root.right);
}; // O(n) time, O(n) space

console.log('------------------');
console.log('preOrder');
preOrder(a);

// post-order traversal
const postOrder = (root) => {
	// the tree is empty
	if (root === null) return;

	preOrder(root.left);
	preOrder(root.right);
	console.log(root.val);
}; // O(n) time, O(n) space

console.log('------------------');
console.log('postOrder');
postOrder(a);

// in-order traversal
const inOrder = (root) => {
	// the tree is empty
	if (root === null) return;

	preOrder(root.left);
	console.log(root.val);
	preOrder(root.right);
}; // O(n) time, O(n) space

console.log('------------------');
console.log('inOrder');
inOrder(a);

// Sum tree
