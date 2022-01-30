class BTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // BST: Add -- Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.
    
    add(new_value) {  // 19 lines of code
            // 1 define new node
                                                                let log_string = new String();
        const new_node = new BTNode(new_value);
            // 2 define sub_tree as root 
        let sub_tree = this.root;
            // 3 while sub_tree does not = null or None
        while (sub_tree) {
            // 4 reassign sub_tree or new_node to the right or left
                                                                log_string = log_string + sub_tree.value;
            if (sub_tree.value <= new_node.value) {
                if (sub_tree.right == null){
                    sub_tree.right = new_node;
                                                                log_string = log_string + new_node.value;                    
                                                                console.log("this branch: ",log_string)
                    return this
                } else {
                    sub_tree = sub_tree.right ;
                }
            } else {
                if (sub_tree.left == null){
                    sub_tree.left = new_node;
                                                                log_string = log_string + new_node.value;                    
                                                                console.log("this branch: ",log_string)
                    return this
                } else {
                    sub_tree = sub_tree.left ;
                }
            }
        }
            // 5 if there is no root node, new_node becomes root node
        this.root = new_node;
                                                                log_string = log_string + new_node.value;
                                                                console.log("this branch: ",log_string)
        return this;
    }


// BST: Contains -- Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

    contains(value) {
        let contains_value = " it doesn't contain " + value;
        function recursive_contains(x){
            if (x.value == value) {
                contains_value = ' it contains ' + value;
            } else {
                if (x.left) {
                    recursive_contains(x.left);
                }
                if (x.right) {
                    recursive_contains(x.right);
                }
            }
            return contains_value
        }
        if (this.root) {
            return recursive_contains(this.root);
        }
        return " this tree is empty"
    }


// BST: Min -- Create a min() method on the BST class that returns the smallest value found in the BST.

    min() {
        if (this.root) {
            let min = this.root.value;
            function recursive_min(x) {
                if (x.value < min) {
                    min = x.value
                }
                if (x.right) {
                    recursive_min(x.right);
                }
                if (x.left) {
                    recursive_min(x.left);
                }
                return min
            } 
            recursive_min(this.root)
            return "minimum value is " + min
        }
        return " this tree is empty"
    }


// BST: Max

// Create a max() BST method that returns the largest value contained in the binary search tree.
    max() {
        if (this.root) {
            let max = this.root.value;
            function recursive_max(x) {
                if (x.value > max) {
                    max = x.value;
                }
                if (x.right) {
                    recursive_max(x.right);
                }
                if (x.left) {
                    recursive_max(x.left);
                }
                return max;
            }
            recursive_max(this.root);
            return "maximum value is " + max;
        }
        return " this tree is empty"
    }
// BONUS: BST: Size -- Write a size() method that returns the number of nodes (values) contained in the tree.

    size() {
        if (this.root) {
            let size = 0;
            function recursive_size(x) {
                size += 1;
                if (x.right) {
                    recursive_size(x.right);
                }
                if (x.left) {
                    recursive_size(x.left);
                }
            }
            recursive_size(this.root);
            return size;    
        }
        return " this tree is empty"
    }

// BONUS: BST: Is Empty -- Create an isEmpty() method to return whether the BST is empty (whether it contains no values).

    isEmpty() {
        if (this.root) {
            return "this tree is not empty";    
        }
        return " this tree is empty"
    }

}   // end of class BST



// ********************
// *****TEST CASES*****
// ********************

// .add

const new_bst = new BST
new_bst.add(5).add(7).add(3).add(2).add(4).add(8).add(9).add(8).add(6).add(7).add(8);

// .contains

console.log(new_bst.contains(4));
console.log(new_bst.contains(1));
console.log(new_bst.contains(9));
console.log(new_bst.contains(10));

const second_bst = new BST();
console.log(second_bst.contains(4));
console.log(second_bst.contains(1));
second_bst.add(10);
console.log(second_bst.contains(10));
console.log(second_bst.contains(2));

// .min

const empty_bst = new BST();

console.log("new_bst min: ",new_bst.min());
console.log("second_bst min: ",second_bst.min());
console.log("empty_bst min: ",empty_bst.min());

// .max

console.log("new_bst max: ",new_bst.max());
console.log("second_bst max: ",second_bst.max());
console.log("empty_bst max: ",empty_bst.max());

// .size

console.log("new_bst size: ",new_bst.size());
console.log("second_bst size: ",second_bst.size());
console.log("empty_bst size: ",empty_bst.size());

// .isEmpty

console.log("new_bst: ",new_bst.isEmpty());
console.log("second_bst: ",second_bst.isEmpty());
console.log("empty_bst: ",empty_bst.isEmpty());

