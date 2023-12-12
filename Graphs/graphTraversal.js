/*  GRAPH TRAVERSAL USES
    1. Peer to peer networking
    2. Web crawlers
    3. Finding closest matches/ recommendations
    4. Shortest path problems
        a) GPS navigation
        b) Solving mazes
        c) AI (shortest path to win the game)
*/

/* DFS GRAPH TRAVERSAL 
    -> follow branch down before backtracking
*/

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const list = this.adjacencyList;

        const dfs = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            list[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            });
        }

        dfs(start);

        return result;
    }

    depthFirstIterative(start){
        const result = [];
        const visited = {};
        const stack = [start];
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }

        return result;
    }
    breadthFirst(start){
        const result = [];
        const visited = {};
        const queue = [start];
        let currentVertex;

        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            this.adjacencyList[currentVertex].forEach(neightbour => {
                if(!visited[neightbour]){
                    visited[neightbour] = true;
                    result.push(neightbour);
                }
            })
        }

        return result;
    }
}  