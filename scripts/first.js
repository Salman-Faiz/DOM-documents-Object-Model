console.log('first file');

const main=document.getElementById('mainContainer');
const section2=document.createElement('section');
main.appendChild(section2);
const h2=document.createElement('h1');
h2.innerText='my third section';
section2.appendChild(h2);
const paragraph2=document.createElement('p');
paragraph2.innerText='salman faiz saabbir';
section2.appendChild(paragraph2);
section2.style.backgroundColor='lightgreen';
section2.style.border= '5px solid black';
section2.style.borderRadius= '20px';
section2.style.paddingLeft= '20px';
section2.style.fontSize= '28px';

