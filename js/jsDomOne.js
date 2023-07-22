const content = document.getElementById('demo-id');
content.innerHTML = 'Hello JavaScript DOM';

//console.log(content.innerHTML);

// var h2Elements = document.getElementsByTagName("h2");

// // Loop through the h2 elements and print their innerHTML
// for (var i = 0; i < h2Elements.length; i++) {
//     console.log(h2Elements[i].innerHTML);
// }

const classElements = document.getElementsByClassName('heading-class');
classElements.innerHTML = 'Changed Heading';