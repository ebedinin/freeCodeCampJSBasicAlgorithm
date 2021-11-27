function titleCase(str) {
    const arr = str.toLowerCase().split(" ");
    for(let i=0;i<arr.length;i++){
        const word = arr[i].split('');
        word[0]=word[0].toUpperCase();
        arr[i] = word.join('');
    }
    return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));