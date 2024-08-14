function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const str = "hello world";
const capitalizedStr = capitalizeFirstLetter(str);
console.log(capitalizedStr); 