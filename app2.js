const form = document.querySelector('.teste');
let score = 0

form.addEventListener('submit', evt => {
    let answer1 = document.querySelector('#question1').value.toLowerCase();
    let answer2 = document.querySelector('#question2').value.toLowerCase();
    let answer3 = document.querySelector('#question3').value.toLowerCase();
    let answer4 = document.querySelector('#question4').value.toLowerCase();
    let answer5 = document.querySelector('#question5').value.toLowerCase();
    let answer6 = document.querySelector('#question6').value.toLowerCase();
    let answer7 = document.querySelector('#question7').value.toLowerCase();
    let answer8 = document.querySelector('#question8').value.toLowerCase();
    let answer9 = document.querySelector('#question9').value.toLowerCase();
    let answer10 = document.querySelector('#question10').value.toLowerCase();
    let answer11 = document.querySelector('#question11').value.toLowerCase();
    let answer12 = document.querySelector('#question12').value.toLowerCase();
    let answer13 = document.querySelector('#question13').value.toLowerCase();
    let answer14 = document.querySelector('#question14').value.toLowerCase();
    let answer15 = document.querySelector('#question15').value.toLowerCase();
    
    evt.preventDefault();

    //answer 1
    if (answer1 === "he is" || answer1 === "he's") {
        score++
        const number = document.querySelector('.first')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>1. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "He is" or the contracted form, "He's".`
        const firstQuestion = document.querySelector('.first_question');
        firstQuestion.appendChild(rightAnswer);
    }

    //answer 2
    if (answer2 === "are you" || answer2 === "is that") {
        score++
        const number = document.querySelector('.second')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>2. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "Are you".`
        const secondQuestion = document.querySelector('.second_question');
        secondQuestion.appendChild(rightAnswer);
    }

    //answer 3
    if (answer3 === "are not" || answer3 === "aren't") {
        score++
        const number = document.querySelector('.third')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>3. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "are not" or the contracted form, "aren't".`
        const thirdQuestion = document.querySelector('.third_question');
        thirdQuestion.appendChild(rightAnswer);
    }

    //answer 4
    if (answer4 === "my") {
        score++
        const number = document.querySelector('.fourth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>4. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "my".`
        const fourthQuestion = document.querySelector('.fourth_question');
        fourthQuestion.appendChild(rightAnswer);
    }

    //answer 5
    if (answer5 === "her") {
        score++
        const number = document.querySelector('.fifth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>5. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "her".`
        const fifthQuestion = document.querySelector('.fifth_question');
        fifthQuestion.appendChild(rightAnswer);
    }

    //answer 6
    if (answer6 === "do not drink" || answer6 === "don't drink") {
        score++
        const number = document.querySelector('.sixth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>6. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "do not drink" or "don't drink".`
        const sixthQuestion = document.querySelector('.sixth_question');
        sixthQuestion.appendChild(rightAnswer);
    }

    //answer 7
    if (answer7 === "do you like") {
        score++
        const number = document.querySelector('.seventh')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>7. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "Do you like".`
        const seventhQuestion = document.querySelector('.seventh_question');
        seventhQuestion.appendChild(rightAnswer);
    }

    //answer 8
    if (answer8 === "watches") {
        score++
        const number = document.querySelector('.eighth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>8. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "watches".`
        const eighthQuestion = document.querySelector('.eighth_question');
        eighthQuestion.appendChild(rightAnswer);
    }

    //answer 9
    if (answer9 === "those") {
        score++
        const number = document.querySelector('.ninth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>9. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "watches".`
        const ninthQuestion = document.querySelector('.ninth_question');
        ninthQuestion.appendChild(rightAnswer);
    }

    //answer 10
    if (answer10 === "this") {
        score++
        const number = document.querySelector('.tenth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>10. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "this".`
        const tenthQuestion = document.querySelector('.tenth_question');
        tenthQuestion.appendChild(rightAnswer);
    }

    //answer 11
    if (answer11 === "can not sing" || answer11 === "cannot sing" || answer11 === "can't sing") {
        score++
        const number = document.querySelector('.eleventh')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>11. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "this".`
        const eleventhQuestion = document.querySelector('.eleventh_question');
        eleventhQuestion.appendChild(rightAnswer);
    }

    //answer 12
    if (answer12 === "can play") {
        score++
        const number = document.querySelector('.twelfth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>12. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "can play".`
        const twelfthQuestion = document.querySelector('.twelfth_question');
        twelfthQuestion.appendChild(rightAnswer);
    }

    //answer 13
    if (answer13 === "is raining" || answer13 === "'s raining") {
        score++
        const number = document.querySelector('.thirteenth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>13. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "is raining".`
        const thirteenthQuestion = document.querySelector('.thirteenth_question');
        thirteenthQuestion.appendChild(rightAnswer);
    }

    //answer 14
    if (answer14 === "are the neighbors having" || answer14 === "are they having") {
        score++
        const number = document.querySelector('.fourteenth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>14. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "Are the neighbors having".`
        const fourteenthQuestion = document.querySelector('.fourteenth_question');
        fourteenthQuestion.appendChild(rightAnswer);
    }

    //answer 15
    if (answer15 === "hot" || answer15 === "warm") {
        score++
        const number = document.querySelector('.fifteenth')
        number.innerHTML = '<span class="checkmark">&#10004</span><span>15. </span>'
    } else {
        const rightAnswer = document.createElement('p');
        rightAnswer.innerText = `The correct answer should be "hot" or "warm".`
        const fifteenthQuestion = document.querySelector('.fifteenth_question');
        fifteenthQuestion.appendChild(rightAnswer);
    } 

    if (score < 5) {
        const result = document.createElement('div');
        const displayResult = document.querySelector('.result');
        result.innerHTML = `<h4>You scored ${score} out of 15, mas tá tudo bem. Nossas aulas gravadas podem te ajudar. Você estuda no seu tempo. <br> Dá uma conferida nos nossos <a href="index.html">cursos</a>! </h4>`
        displayResult.appendChild(result)
    } else if (score > 6) {
        const result = document.createElement('div');
        const displayResult = document.querySelector('.result');
        result.innerHTML = `<h4>You scored ${score} out of 15. That's good, but there is still room for improvement. Maybe our classes? You will be paired up with someone at your level. <br> Dá uma conferida nos nossos <a href="index.html">cursos</a>! </h4>`
        displayResult.appendChild(result)
    } else if (score > 10) {
        const result = document.createElement('div');
        const displayResult = document.querySelector('.result');
        result.innerHTML = `<h4>You scored ${score} out of 15. Good job! Every one of our courses should be good for you. <br> Dá uma conferida nos nossos <a href="index.html">cursos</a>! </h4>`
        displayResult.appendChild(result)
    } else if (score === 15) {
        const result = document.createElement('div');
        const displayResult = document.querySelector('.result');
        result.innerHTML = `<h1>CONGRATULATIONS!</h1><h4>You scored ${score} out of 15! That's awesome! Our conversation classes should be perfect for you to practice that amazing English you have. <br> Dá uma conferida nos nossos <a href="index.html">cursos</a>! </h4>`
        displayResult.appendChild(result)
    }  

    document.querySelector('button').disabled = true;
})  