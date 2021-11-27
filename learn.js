function getIndexToIns(arr, num) {
    arr = arr.sort((a, b) => a - b);
    if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}


console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));