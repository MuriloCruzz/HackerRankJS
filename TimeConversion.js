function timeConversion(s){
    s.split('');
    var horas = parseInt(s[0]+s[1]);
    var minutos = s[3]+s[4];
    var segundos = s[6]+s[7];
    var ampm = s[s.length-2];
    
    if(horas >= 12 && ampm === 'A'){
        horas = horas - 12;
    }else if(horas < 12 && ampm === 'P'){
        horas = horas + 12;
    }

    if(horas < 10){
        return (`0${horas}:${minutos}:${segundos}`);
    }else {
        return (`${horas}:${minutos}:${segundos}`);
    }
}