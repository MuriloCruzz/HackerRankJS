function DiagonalDifference(arr){
    var diagonal1 = 0;
    var diagonal2 = 0;

    for(let i=0; i<arr.length; i++){
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][arr.length-1-i];
    }
    
    return Math.abs(diagonal2 - diagonal1);  
}