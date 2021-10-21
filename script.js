const example1 = document.getElementById('list');
console.log(example1.children[0].innerText, example1.children[4].innerText, example1.children[1].innerText, example1.children[3].innerText, example1.children[2].innerText);


const example2 = document.getElementsByTagName("li");
console.log(example2[0].innerText, example2[4].innerText, example2[1].innerText, example2[3].innerText, example2[2].innerText, );


const example3 = document.querySelectorAll('li');
console.log(example3[0].textContent, example3[4].textContent, example3[1].textContent, example3[3].textContent, example3[2].textContent);