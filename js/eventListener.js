document.getElementById('btn-event').addEventListener('click', function () {
    const headingElement = document.getElementById('heading-id');
    headingElement.innerHTML = 'Changed Text by applying Click Event';

    // Sum Calculation:
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;

    const total = document.getElementById('total-amount');
    total.innerHTML = ` ${sum}`;

    // setTimeout(function(){

    // })
}, true);