function concatenarArrays(array1, array2) {
    return array1.concat(array2);
  }
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const resultado = concatenarArrays(array1, array2);
  
  console.log(resultado); // [1, 2, 3, 4, 5, 6]