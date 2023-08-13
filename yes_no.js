

function askQuestion() {
    const seed = (new Date().getTime() * Math.PI) % 100;
    const randomNumber = Math.sin(seed) * 10000;
    const index = Math.abs(Math.floor(randomNumber)) % 3;

    const options = ['Yes', 'No', 'Maybe'];
    const answer = options[index];

    const answerDiv = document.getElementById('answer');
    answerDiv.textContent = `Answer: ${answer}`;
    
    // Add 'active' class to trigger the color transition
    answerDiv.classList.add('active');  
    
    // Animation for the answer using GreenSock (GSAP)
    gsap.from("#answer", {opacity: 0, y: -50, duration: 1});

    // Assuming you added audio, play the audio
    if (audio) {
        audio.play();
    }
    
    // Remove the 'active' class after the transition duration to reset it
    setTimeout(() => {
        answerDiv.classList.remove('active');
    }, 1000);
}


document.getElementById('question').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        askQuestion();
    }
});

function changeTheme(theme) {
    document.body.className = theme;
}

let audio = new Audio('path_to_notify.mp3');
