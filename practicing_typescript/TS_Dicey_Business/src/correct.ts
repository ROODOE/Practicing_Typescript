

const generateBtn = document.getElementById('generate-die');
const rollDie = document.getElementById('roll');
const dieSumBtn = document.getElementById('sum');
const dieContainer = document.getElementById('die-container');

let addID = 1;
let dieArr: any = [];

class Dice {
    constructor() {

        let addedDieDiv = document.createElement('div');
        addedDieDiv.className = 'addedDie';
        addedDieDiv.id = '#' + addID;
        addedDieDiv.innerText = randNum();
        dieArr.push(addedDieDiv);
        dieContainer.appendChild(addedDieDiv);

        addedDieDiv.addEventListener('click', function () {
            this.style.backgroundColor = getNewColor();
            let rand = randNum();
            this.innerText = rand;
            console.log(dieArr);
        })
        addedDieDiv.addEventListener('dblclick', function () {
            // let subCounter = 0;
            this.remove();
            dieArr.pop(this);
        })
    }

}

function randNum() {
    let rand = Math.floor(Math.random() * 6 + 1);
    return rand;
}

function newRandom() {
    dieArr.forEach(i => {
        console.log(i);
        i.innerText = randNum();
    })
};

function getNewColor() {
    let randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randColor;
}

generateBtn.addEventListener("click", () => {
    new Dice();     //let dice = 
    addID += 1;
})

rollDie.addEventListener("click", () => {
    newRandom();
})

dieSumBtn.addEventListener('click', () => {
    let counter = 0;
    dieArr.forEach(i => {
        console.log(i.innerText);
        console.log(parseInt(i.innerText));
        counter += parseInt(i.innerText)
        console.log(counter);

    })
    alert(counter);
})

