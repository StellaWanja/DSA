/** MULTI DIMENSIONAL ARRAYS
 * The depth to which this goes (array of arrays) is called the dimension of the array
 * 1d arrays => [val1][val2][val3]
 * 
 * 2d arrays => [val1][val2][val3]
 *              [val4][val5][val6]
 *                  
 * 3d arrays =>       [val7][val8][val9]
 *              [val1][val2][val3]
 *              [val4][val5][val6]
 * 
 * 3d arrays => row, column, depth
 * 
 * To store N-dimensional arrays in memory, we need to map them to single-dimensional arrays.
 * 
 * serialization -> process of converting data objects from one form to another to make storage and transmission easier while still preserving state information
 * deserialization  -> process of converting it back to its original form
 * 
*/

/** TECHNIQUES FOR MAPPING N-DIMENSIONAL ARRAYS TO 1D MEMORY
    1. Row-major ordering
    2. Column-major ordering
*/

/** ROW MAJOR ORDERING
  - consecutive data items in a row of an array are placed consecutively to each other in the memory(linear)
  -> [1,2,3]
     [4,5,6]
    becomes -> [1,2,3,4,5,6]
  -> to find the address in row major = Arr[i][j],(i = row, j= column, m=rows, n=columns, w=size of data type)
  -> Arr[i][j](where index starts at 0) = base address+(i*n+j)*w
  -> eg 100 + (2*4+1)*2 = 118
  -> Arr[i][j](where index starts at 1) = base address+((i-1)*n+(j-1))*w
*/

/** COLUMN MAJOR ORDERING
   - consecutive data items in a col of an array are placed consecutively to each other in the memory(linear)
   -> [1,2,3]
      [4,5,6]
      becomes -> [1,4,2,5,3,6]
  -> to find the address in row major = Arr[i][j],(i = row, j= column, m=rows, n=columns, w=size of data type)
  -> Arr[i][j](where index starts at 0) = base address+(j*m+i)*w
  -> Arr[i][j](where index starts at 1) = base address+((j-1)*m+(i-1))*w
*/


