let fotr = document.querySelector('footer');
fotr.setAttribute('id', 'foot');

let h1 = document.createElement('h1');
h1.innerText = 'This is footer section header 1';
document.getElementById('foot').appendChild(h1);





let mainSection = document.getElementById('main-section');
console.log(mainSection);

let div = document.createElement('div');
let h2 = document.createElement('h2');
h2.innerText = 'This is heading 2 add by JavaScript';
div.appendChild(h2);

let ul = document.createElement('ul');
let li = document.createElement('li');
let a  = document.createElement('a');
a.innerText = 'navigation bar with a tag';
ul.appendChild(li).appendChild(a);
div.appendChild(ul);

mainSection.appendChild(div);


// Same kajta direct html dey kora jay 

let div2 = document.createElement('div');
div2.innerHTML = `
<h5>This is heading 5 add by JavaScript</h5>
<ul>
    <li> <a>2nd navigation bar with a tag</a> </li>
    <li> <a>2nd navigation bar with a tag</a> </li>
    <li> <a>2nd navigation bar with a tag</a> </li>
    <li> <a>2nd navigation bar with a tag</a> </li>
</ul>
`
mainSection.appendChild(div2);


