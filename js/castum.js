const lekha = document.querySelector('.lekha p');
lekha.innerHTML = lekha.innerHTML.split('').map(
    (char, i) => 
        `<span style='transform:rotate(${i * 7}deg)'>${char}</span>`
).join('')