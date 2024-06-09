let randomNum = Math.round(Math.random() * 10 + 1);
let userGuess = document.querySelector('#guess').value;
let submit = document.querySelector('.btn');
let result = document.querySelector('.result');


submit.addEventListener('click', () => {
    if(userGuess == randomNum){
        result.innerHTML  = `Congratulation!!! ${userGuess} is correct answer`
    }
    else{
        result.innerHTML = `Sorry!!. Correct answer is ${randomNum}`
    }
})

