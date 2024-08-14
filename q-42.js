function compareObjects(obj1, obj2) {
    const json1 = JSON.stringify(obj1);
    const json2 = JSON.stringify(obj2);
    return json1 === json2;
}
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };

if (compareObjects(obj1, obj2)) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}