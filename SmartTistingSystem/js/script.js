// Login system
function login() {
    let loginEmail = "Thuraiya@gmail.com";
    let loginPassword = "Th1234";

    let attempts = 0;

    while (attempts < 3) {
        let email = prompt ("Enter your Email");
        let password = prompt ("Enter your Password");

        if (email === loginEmail && password === loginPassword) {
            alert (" Login Successful");
            startQuiz();
            return;
        }
        attempts++;
        alert ("Try again, Incorrect email or password");
    }

// create lock for 30 seconds 
alert ("Login locked for 30 seconds");

let count = 30;
let timer = setInterval (() => {
    console.log ("try again after:" + count + "seconds");
    count--;

    if (count < 0 ) {
        clearInterval(timer);
        alert ("you can try again now");
        login();
    }   
  }, 1000);
}

// for Generate a random question
function question() {
    let number1 = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * 20) + 1;

    let operetions  = ["+", "-", "*", "/", "%", "**"];
    let operation  = operetions[Math.floor(Math.random() * operetions.length)];

    let question = `${number1} ${operation } ${number2}`;
    let answer = eval(question);

    return { question, answer };
}

// start quiz
function startQuiz() {
    let numQuestions = parseInt(prompt("How many questions do you want in the exam?"));

    let score = 0;

    for (let i = 1; i <= numQuestions; i++) {

        let q = question();
        let userAnswer = parseFloat(prompt(`Q${i}: ${q.question} = ?`));

        if (Math.abs(userAnswer - q.answer) < 0.0001){
            score++;
        }
    }

    alert(`Your score is ${score} out of ${numQuestions}.`);
}

login();