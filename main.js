const main = document.querySelector('.cardspace');
let even_number = 0;
let j = 0;
const img1 = `<img src="bobrossparrot.gif"/>`;
const img2 = `<img src="explodyparrot.gif"/>`;
const img3 = `<img src="fiestaparrot.gif"/>`;
const img4 = `<img src="metalparrot.gif"/>`;
const img5 = `<img src="revertitparrot.gif"/>`;
const img6 = `<img src="tripletsparrot.gif"/>`;
const img7 = `<img src="unicornparrot.gif"/>`;
let img_array = [img1, img2, img3, img4, img5, img6, img7];
let img_array_final = [];
img_array = img_array.sort(() => Math.random() -0.5);

function gamesize(){
    even_number = parseInt(prompt("Com quantos pares você quer jogar? (De 1 a 7)"));
        while (even_number>7){
        even_number = parseInt(prompt("Com quantos pares você quer jogar? (De 1 a 7)"))
        }
    display_cards()
}

gamesize();

function flip(e){
    if(document.querySelector('.card_front').style.display == 'none'){
        document.querySelector('.card_front').style.display = '';
    } else {
        document.querySelector('.card_front').style.display = 'none';
    }
} 
function display_cards(){
    main.innerHTML = ``;
    for (let i = 0; i < even_number; i++){
        img_array_final.push(img_array[i]);
        img_array_final.push(img_array[i]);
    }
    img_array_final = img_array_final.sort(() => Math.random() -0.5);
    for (j = 0; j < even_number * 2; j++){
        
        let card = `
        <div class="driven-card">
        <div class="flipper">
        <div class="front-face">
        <img src="front.png">
        </div>

        <div class="back-face">
        ${img_array_final[j]}
        </div>
        </div>
        </div>`
    main.innerHTML = main.innerHTML + card;
    }
}
