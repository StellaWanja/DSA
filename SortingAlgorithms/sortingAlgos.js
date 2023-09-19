/* COMPARISON/ LINEAR ALGOS
     1. Bubble sort
     2. Selection sort
     3. Insertion sort
     4. Heap sort
     5. Merge sort
     6. Quick sort
*/

/* NON-COMPARISON/ NON-LINEAR ALGOS
     1. Radix sort
     2. Counting sort
*/

/* STABILITY OF AN ALGORITHM
    -> how the algorithm treats comparable items with equal sort keys
    -> A stable sorting algorithm maintains the relative order of the items with equal sort keys
    -> eg Grades -> Earl- B, Fabian- B, Gill-B
    ->  after sorting with stable algo, is still the same (sorted alphabetically)
    -> unstable sort -> Gill-B, Fabian-B, Earl-B (not sorted alphabetically)
    -> Stable algos -> insertion, bubble, merge
    -> Unstable algos -> selection, shell
*/

/* TIME COMPLEXITY AND SPACE COMPLEXITY
    1. Bubble sort -> O(n^2) time, O(1) space
    2. Selection sort -> O(n^2) time, O(1) space
    3. Insertion sort -> O(n^2) time, O(1) space
    4. Merge sort -> O(n log n) time, O(n) space
    5. Quick sort -> O(n log n) time, O(log n) space
    6. Heap sort -> O(n log n) time, O(1) space
    7. Counting sort -> O(n+k) time, O(k) space
    8. Radix sort -> O(nk) time, O(n+k) space => n-length of list/arr, k-length of the numbers
*/