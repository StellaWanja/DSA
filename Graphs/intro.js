/* INTRO
    -> Is a collection of nodes and connections to these nodes
*/

/* USES FOR GRAPHS
    1. Social networks
    2. Location/ mapping
    3. Routing algos
    4. Visual hierarchy
    6. File system optimizations
*/

/* GRAPH TERMS
    1. Vertex -> a node
    2. Edge -> connection b2n nodes
    3. Weighted/ unweighted ->  values assigned to distances b2n vertices
*/

/* TYPES OF GRAPHS
    1. Undirected - no one way b2n nodes eg facebook (no direction via arroes)
                    ->  see data of connections, even of friends of connections
                        Maria--Ann
                          |  \  |
                        Tim    Joan
    2. Directed -  connectiions shown with arrows -> eg Instagram ->  only see data of follow
                    -> connections can be bidirectional or one way
                        Maria -> Justin Bieber <-> Kanye
                          ^      ^
                          |     /
                          v    /
                        Joanna
    3. Weighted - Values are assigned to the edges
                        A - (10) - F
                        |
                        (8)
                        |
                        B
    4. Unweighted ->  has no values assigned to the edges

*/

/* REPRESENTING A GRAPH
 -> uses an adjacency matrix/ list 
        A - B - C - D - E - F
        ^                   |
        |    -      -      -
    //ADJACENCY MATRIX
        -> can be true/ false
        A | B | C | D | E | F
     A  0   1   0   0   0   1
     B  1   0   1   0   0   0
     C  0   1   0   1   0   0
     D  0   0   1   0   1   0
     E  0   0   0   1   0   1
     F  1   0   0   0   1   0
     
    //ADJACENCY LIST
      -> use a hashtable/ object if they are not numbers
     {
        A: ["B", "F"],
        B: ["A", "C"],
        C: ["B", "D"],
        D: ["C", "E"],
        E: ["D", "F"],
        F: ["E", "A"]
     }
     -> for numbers (array)
     [
        0: [1,5],
        1: [0,2],
        2: [1,3],
        3: [2,4],
        4: [3,5],
        5: [0,4]
     ]
*/

/*  BIG 0 - SPACE COMPLEXITY
     v -> (no. of vertices)  e -> (no. of edges)
     OPERATION      |  ADJACENCY LIST   |  ADJACENCY MATRIX
     Add vertex         O(1)                O(v^2) -> create new row and col
     Add edge           O(1)                O(1)
     Remove vertex      O(v+e)              O(V^2)
     Remove edge        O(e)                O(1)
     Lookup             O(v+e)              O(1)
     Storage            O(v+e)              O(v^2)
*/

/* ADJACENCY LIST VS MATRIX
     ADJACENCY LIST 
     1. Can take up less space(in sparse graphs)
     2. Faster to iterate over all edges
     3. Can be slower to lookup specific edges
     ADJACENCY MATRIX
     1. Takes up more space (in sparse graphs)
     2. Slower to iterate over all edges
     3. Faster to lookup specific edge
*/
