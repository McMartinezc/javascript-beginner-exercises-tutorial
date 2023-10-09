

//Your code above ^^^

function sing(){
    let frase = "";

    for (let i=0; i<11; i++){
        if(i===4) frase += 'there will be an answer, ';
        else if(i===10) frase += 'whisper words of wisdom ';
        else frase += 'let it be, ';
    }
    return frase;
}

console.log(sing());