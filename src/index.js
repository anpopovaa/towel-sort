
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if(!matrix || matrix == '') return [];
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 === 1){
      newArr.push(matrix[i].sort((a, b) => b - a));
    } else {
      newArr.push(matrix[i]);
    }
}
  return newArr.toString().split(',').map(s => +s);
}
