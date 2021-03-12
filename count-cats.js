function countCats (arr){
    let count = 0;
    let str = '^^';
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === str){
            count++;
            }
        }
    }
    return count;
}
arr = [[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]];