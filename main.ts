const arr1 = ["1", "2", "3"];
const arr2 = [1, 2, [3, 4, 5, 6]];

//Función donde metemos todo, recibe un array de strings, nums y array de strings y nums
function getProducts (arrNums: Array<string|number|Array<string|number>>) {
  //1. Aplanar array, ponemos 2 en vez de inifinity porque al poder recibir un array de arrays, solo tendrá como mucho dos niveles
  const plano: Array<string|number> = arrNums.flat(2);

  //2. Convertir strings a nums
  const nums = plano.map((elem) => parseInt(elem.toString()));
  const result: number[] = []

  //3. Por cada elem del array de nums, multiplicar todos los demás y añadirlo al array result
  nums.forEach((value, index) => {
    //1. obtener array sin el elem en el que estamos
    const numswithoutCurrent = [...nums]
    numswithoutCurrent.splice(index, 1) //Con splice eliminamos elems en la posición dicha.. En este caso, 1 elem en la pos index

    //2. multiplicar el resto
    const total = numswithoutCurrent.reduce((a,b) => {
      return a*b;  
    })

    result.push(total);
  })
  
  return result;
}

console.log(getProducts(arr2));