function PlusMinus(arr){
    var positivo = 0;
    var negativo = 0;
    var zero = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positivo += 1;
        }
        else if(arr[i]<0){
            negativo += 1;
        }
        else{
            zero += 1;
        }
    }
    console.log((positivo/arr.length).toFixed(6));
    console.log((negativo/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}