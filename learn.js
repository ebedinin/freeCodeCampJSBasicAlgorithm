const findLongestWordLength = (str) => {
    let length = 0;
    const arr = str.split(" ");
    for(let index in arr){
        if (length < arr[index].length) length = arr[index].length;
    }
    return length;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");