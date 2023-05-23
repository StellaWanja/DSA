// priority queue - elements are removed from the queue based on a priority constraint
// higher priority removed first
// eg at hospital ER, handled based on severity of patient's condition
// Patients with a high priority code are seen before patients
// with a lower priority code, and patients that have the same priority code are seen on a FIFO basis
// each element that enters the queue has two values, a priority value and the data
function Patient(name, code) {
  this.name = name;
  this.code = code;
}

// highest priority element -> lowest priority code eg 1 has higher priority than 4
function dequeue() {
  let priority = this.data[0].code;
  for (let i = 0; i < data.length; i++) {
    if (this.data[i].code < priority) {
      priority = i;
    }
  }
  return this.data.splice(priority, 1);
}

function enqueue(el) {
  if (this.isEmpty()) {
    array.push(el);
  } else {
    for (var i = 0; i<array.length; i++) {
        //if priority is lower than array's el, add before collection
        if (el[1] < array[i][1]) {
            array.splice(i, 0, el);
        }
    }
    //add to end of queue
    array.push(el);
  }
}
