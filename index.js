arr = [3, 5, 7, 2, 9, 6];

function minNumber(arr){
    let num = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < num){
            num = arr[i];
        }
    }
    return num;
}

function maxNumber(arr){
    let num = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > num){
            num = arr[i];
        }
    }
    return num;
}

function avgArr(arr){
    let sum = 0;
    let avg = 1;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        avg = sum / arr.length; 
    }
    return avg;
}

