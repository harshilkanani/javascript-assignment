function cloneArray(arr) {
    return [...arr];
}
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = cloneArray(originalArray);
console.log(clonedArray); 