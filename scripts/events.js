// Using onclick event
// ..................option-1....directly set on the HTML elements...................

//  <button onclick="document.body.style.backgroundColor='red'"> make red</button>

// ..................option-2.....add onclick function on the html element..................

// <button onclick="makeYellow()"> make yellow</button>
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}
// ..................option-3............
// dont need to call function, just assign the name of function
// <button id="makeGreen"> make green</button>
const makeGreenBtn = document.getElementById('makeGreen');
makeGreenBtn.onclick=makeGreenFunction;
function makeGreenFunction(){
    document.body.style.backgroundColor='green';
}
// ..................option-3...another.........
// 
const makePurpleBtn = document.getElementById('makePurple');
makePurpleBtn.onclick=function makePurpleFunction(){
    document.body.style.backgroundColor='purple';
}

// ..................option-4......using functionName into add event listener......
const makePinkBtn =document.getElementById('makePink');
makePinkBtn.addEventListener('click', makePinkFunction);
function makePinkFunction(){
    document.body.style.backgroundColor='pink';
}
// ..................option-4......putting whole function into add event listener......
const makeOrangeBtn =document.getElementById('makeOrange');
makeOrangeBtn.addEventListener('click',function makeOrangeFunction(){
    document.body.style.backgroundColor='orange';
});

// final option and we will use this option...
// we will not use functionName in this segment
document.getElementById('makeGoldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
})