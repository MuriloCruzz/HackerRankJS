function Staircase(n){
    var hash = '#';
    var espaco = '';
    var posicao = n - 1;

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(j < posicao){
                espaco += ' ';
            }
            else {
                espaco += hash;
            }
        }
        console.log(espaco);
        espaco = '';
        posicao -= 1;

    }
}