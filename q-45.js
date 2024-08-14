function isArray(variable) {
    return Array.isArray(variable);
  }
  
  const myArray = [1, 2, 3];
  const myObject = { a: 1, b: 2 };
  const myString = "hello";
  
  console.log(isArray(myArray)); 
  console.log(isArray(myObject)); 
  console.log(isArray(myString)); 