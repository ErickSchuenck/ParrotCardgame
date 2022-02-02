let card_number = parseInt(prompt("Com quantos pares você quer jogar? (De 1 a 7)"));
while (card_number>7){
    card_number = parseInt(prompt("Com quantos pares você quer jogar? (De 1 a 7)"))
}

function flip(e){
    if(document.querySelector('.card_front').style.display == 'none'){
        document.querySelector('.card_front').style.display = '';
    } else {
        document.querySelector('.card_front').style.display = 'none';
    }
} 

