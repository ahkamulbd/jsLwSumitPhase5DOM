const divContainer = document.getElementById('div-container');

const newPara = document.createElement('p');
//newPara.innerHTML = 'Here is new paragraph created';
newPara.innerHTML = 'Here is new paragraph created';

divContainer.appendChild(newPara);

const firstPara = document.getElementById('first-para');

const brandNewPara = document.createElement('p');
brandNewPara.innerText = 'Brand New Para added with insertBefore function';

divContainer.insertBefore(brandNewPara, firstPara);