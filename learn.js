function largestOfFour(arr) {
    const arrSubMax = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 1; j < arr[i].length; j++)
            if (max < arr[i][j]) max = arr[i][j];
        arrSubMax.push(max);
    }
    return arrSubMax;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));