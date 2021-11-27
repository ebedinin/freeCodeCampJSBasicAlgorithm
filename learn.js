function chunkArrayInGroups(arr, size) {
    const arrOut = [];
    let arrSub = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arrSub.length % size === 0) {
            arrOut.push(arrSub);
            arrSub = [];
        }
        arrSub.push(arr[i]);
    }
    arrOut.push(arrSub);
    return arrOut;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));