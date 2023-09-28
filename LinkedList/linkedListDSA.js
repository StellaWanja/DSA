/** TIME COMPLEXITY
    -> Access - O(n)
    -> Search - O(n)
    -> Insert (head) - O(1)
    -> Insert (middle) - O(n)
    -> Insert (tail) - O(1) (for singly linked list if have knowledge of what tail is, otherwise O(n))
    -> Remove (head) - O(1)
    -> Remove (tail) - O(1) (for singly linked list if have knowledge of what tail is, otherwise O(n))
    -> Remove (middle) - O(n)
 */

/** COMMON ROUTINES
    1. Counting the number of nodes in the linked list
    2. Reversing a linked list in-place
    3. Finding the middle node of the linked list using two pointers (fast/slow)
    4. Merging two linked lists together
*/   

/** EDGE CASES
    1. Empty linked list (head is null)
    2. Single node
    3. Two nodes
    4. Linked list has cycles (ASK FOR CLARIFICATION)
 */

/** TECHNIQUES
    1. Sentinel/dummy nodes 
        -> prevent writing conditional checks for dealing with null pointers(remove them at end of operation)
    2. Two pointers
        -> Used for: 
           -> Getting the kth from last node
           -> Detecting cycles
           -> Getting the middle node (fast/slow pointers)
    3. Using space
        -> will however increase memory
 */
