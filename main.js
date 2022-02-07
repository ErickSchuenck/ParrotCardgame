let flipped_a_card = false;
let first_card;
let second_card;
let board_locker = false;
let even_number = 0;
let victory_counter = 0;
let play_counter = 0;
let j = 0;
let tick = document.querySelector(".ticker");
let my_interval;
const main = document.querySelector('.cardspace');
const img1 = `<img src="bobrossparrot.gif" alt = 'papagaio cabeludo'/>`;
const img2 = `<img src="explodyparrot.gif" alt = 'papagaio explodindo'/>`;
const img3 = `<img src="fiestaparrot.gif" alt = 'papagaio festeiro'/>`;
const img4 = `<img src="metalparrot.gif" alt = 'papagaio iron maiden'/>`;
const img5 = `<img src="revertitparrot.gif" alt = 'papagaio sobrero'/>`;
const img6 = `<img src="tripletsparrot.gif" alt = 'três papagaio'/>`;
const img7 = `<img src="unicornparrot.gif" alt = 'papagaio com chifre magico'/>`;
let img_array = [img1, img2, img3, img4, img5, img6, img7];
let img_array_final = [];
img_array = img_array.sort(() => Math.random() -0.5);

function gamesize(){
    even_number = parseInt(prompt("Com quantas cartas você quer jogar? (De 4 a 14)"));
        while (even_number>14 || even_number<4 || even_number % 2 !==0){
        even_number = parseInt(prompt("Com quantas cartas você quer jogar? (De 4 a 14)"))
        }
    display_cards();
    play_counter = 0;
}

gamesize();

function flip(element){
    if (board_locker === true) return; 
    else if (element === first_card) return; 
    else {element.classList.add('flip');}

    if (flipped_a_card === false){
    first_card = element;
    play_counter++;
    document.querySelector(".moves_made").innerHTML = play_counter;
    flipped_a_card = true;
    } else {
        flipped_a_card = false;
        second_card = element;
        play_counter++;
        document.querySelector(".moves_made").innerHTML = play_counter;
        check_for_match();
    } console.log(flipped_a_card);
}

function check_for_match(){
    if (first_card.querySelector('.back_face').innerHTML === second_card.querySelector('.back_face').innerHTML){
        console.log("MATCH!!!!!!!");
        first_card.onclick = null;
        second_card.onclick = null;
        victory_counter = victory_counter + 1;
        if (victory_counter * 2== even_number){
            setTimeout(victory, 1000);
        }
        return;
    } else {
        board_locker = true;
        console.log("Try again!");
        setTimeout(close_cards, 1000);
        setTimeout(board_locker_off, 1000);
        return;
    }
}

function victory(){
    alert(`PARABÉNS!!! Você ganhou em ${play_counter} jogadas e ${tick.innerHTML} segundos` )
}

function board_locker_off(){
    board_locker = false;
}

function close_cards(){
    first_card.classList.remove('flip');
    second_card.classList.remove('flip');
}

function display_cards(){
    main.innerHTML = ``;
    for (let i = 0; i < even_number/2; i++){
        img_array_final.push(img_array[i]);
        img_array_final.push(img_array[i]);
    }
    img_array_final = img_array_final.sort(() => Math.random() -0.5);
    for (j = 0; j < even_number; j++){
        
        let card = `
        <div class="driven_card" onclick = 'flip(this)' data-identifier = 'card'>
            
                <div class="front_face" data-identifier = 'front-face'>
                    <img src="front.png">
                </div>

                <div class="back_face" data-identifier = 'back-face'>
                    ${img_array_final[j]}
                </div>

        </div>
        `
    main.innerHTML = main.innerHTML + card;
    }
}
tick.innerHTML = 0;
clearInterval(my_interval);
my_interval = setInterval(gametimer, 1000);
function gametimer(){
    tick.innerHTML = parseInt(tick.innerHTML) +1;
}
