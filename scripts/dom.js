console.log('dom js');
// where to do
const mainContainer1 =document.getElementById('mainContainer');
// what to do
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText='my second section'
section.appendChild(h1);
const p=document.createElement('p');
p.innerText='lLorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, vero itaque expedita voluptatum veniam deserunt debitis aspernatur dolores modi aut sapiente ad exercitationem repellat, esse beatae natus culpa maiores?';
section.appendChild(p);

const ul=document.createElement('ul');
section.appendChild(ul);
const li1= document.createElement('li');
li1.innerText='salman';
ul.appendChild(li1);
const li2= document.createElement('li');
li2.innerText='salman 2';
ul.appendChild(li2);
mainContainer1.appendChild(section);

// another command
const paragraph=document.getElementsByClassName('paragraph');
paragraph.innerText='kkkkk jjjjj hhhhh';

const sectionTitle =document.getElementsByClassName('firstSection');
sectionTitle.setAttribute('sectionTitle','tooltip added by javascript');