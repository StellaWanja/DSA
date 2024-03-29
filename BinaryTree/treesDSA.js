/** COMMON TREE TERMS
    1. Neighbor - Parent or child of a node
    2. Ancestor - predecessor node on the path from root to that node
    3. Descendant  - successor node on the path from that node to leaf node
    4. Degree - Number of children of a node
    5. Degree of a tree - Maximum degree of nodes in the tree
    6. Distance - Number of edges along the shortest path between two nodes
    7. Level/Depth - Number of edges along the unique path between a node and the root node
    8. Width - Number of nodes in a level
    9. Height of a node - no. of edges in the longest path from that node to a leaf
 */

/** BINARY TREE TERMS
    1. Complete binary tree - A complete binary tree is a binary tree in which every level, 
                            except possibly the last, is completely filled, and all nodes in the 
                            last level are as far left as possible.
    2. Balanced binary tree - A binary tree structure in which the left and right subtrees of every
                            node differ in height by no more than 1.
 *  */

/** INTERVIEW TIPS
    -> When a question involves a BST, the
        interviewer is usually looking for a solution which runs faster than O(n)
    -> be very familiar with writing pre-order, in-order, and post-order traversal recursively and iteratively
 */

/** TIME AND SPACE COMPLEXITY
    -> Access - O(log n)
    -> Search - O(log n)
    -> Insert - O(log n)
    -> Remove - O(log n)
    -> Space complexity is dependent on amount of nodes you need to traverse
    -> Space complexity of traversing balanced trees is O(h) where h is the height of the tree
    -> Space complexity of traversing skewed trees (which is essentially a linked list) will be O(n)
 */

/** EDGE CASES
    1. Empty tree
    2. Single node
    3. Two nodes
    4. Very skewed tree (like a linked list)
 */

/** COMMON ROUTINES
    1. Insert value
    2. Delete value
    3. Count number of nodes in tree
    4. Whether a value is in the tree
    5. Calculate height of the tree
    6. Binary search tree
        a) Determine if it is a binary search tree
        b) Get maximum value
        c) Get minimum value
 */

/** TECHNIQUES
    1. Use recursion
    2. Traversing by level -> USE BFS
    3. Summation of nodes -> check whether nodes can be negative
 */


