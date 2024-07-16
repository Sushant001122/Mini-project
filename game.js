const boxes = document.querySelectorAll('.box');
const msg = document.querySelector('.result');
const start = document.querySelector('.new-game');
const reset = document.querySelector('.reset-game');
let player0 = true;

let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((btn) => {
    btn.addEventListener('click', () => {


        if (player0) {
            btn.innerText = 'O'
            player0 = false;
        } else {
            btn.innerText = 'X'
            player0 = true;
        }

        btn.disabled = true;

        winner();
        
        
    })

});

    const disabledBoxes = () => {
        for (let box of boxes){
            box.disabled = true;
        }
    }

    const enableBoxes = () => {
        for (let box of boxes){
            box.disabled = false;
            box.innerHTML = '';
            msg.innerHTML = '';
        }
    }

const winner = () => {
    for (let win of winningPattern){
        let value1 = boxes[win[0]].innerText;
        let value2 =  boxes[win[1]].innerText;
        let value3 = boxes[win[2]].innerText;

        if (value1 != '', value2 != '', value3 != ''){
            if (value1 === value2 && value2 === value3){
                const result = document.createElement('p');
                result.innerText = `Congratulations, Winner is ${value1}`;
                msg.appendChild(result);
                disabledBoxes();
            }
        }
    }
}

start.addEventListener('click', enableBoxes);
reset.addEventListener('click', enableBoxes);

