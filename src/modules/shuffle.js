function shuffle(arr){
    let newArr = [...arr]
    let curr = newArr.length;

    while (curr !== 0){
        let random = Math.floor(Math.random() * curr)
        curr = curr - 1;

        [newArr[curr], newArr[random]] = [newArr[random], newArr[curr]];
    }
    return newArr;
}

export default shuffle