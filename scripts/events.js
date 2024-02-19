function makeYellow(){
    document.body.style.backgroundColor='yellow';
}
// dont need to call function, just assign the name of function
const makeGreenBtn = document.getElementById('makeGreen');
makeGreenBtn.onclick=makeGreenFunction;
function makeGreenFunction(){
    document.body.style.backgroundColor='green';
}
const makePurpleBtn = document.getElementById('makePurple');
makePurpleBtn.onclick= makePurpleFunction;
function makePurpleFunction(){
    document.body.style.backgroundColor='purple';
}