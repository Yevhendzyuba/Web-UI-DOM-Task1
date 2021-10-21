const example1 = document.querySelectorAll('li');
console.log(example1[0].textContent, example1[4].textContent, example1[1].textContent, example1[3].textContent, example1[2].textContent);


const example2 = document.getElementsByTagName("li");
console.log(example2[0].innerText, example2[4].innerText, example2[1].innerText, example2[3].innerText, example2[2].innerText, );