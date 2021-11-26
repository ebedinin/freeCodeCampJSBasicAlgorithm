function findElement(arr, func) {
    for(let index in arr){
        if (func(arr[index])) return arr[index];
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));