function mutation(arr) {
    arr = [arr[0].toUpperCase(),arr[1].toUpperCase()];
    for(let i =0; i<arr[1].length;i++) {
        if (arr[0].indexOf(arr[1][i]) === -1) return false;
    }
    return true;
}

console.log(mutation(["helloy", "hey"]));