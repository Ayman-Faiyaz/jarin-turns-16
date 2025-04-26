const quoteDiv = document.getElementById('quote');

// Random K-drama quotes
const quotes = [
    "“Be yourself, you're enough.”",
    "“Small moments make big memories.”",
    "“Dream big. Sparkle more. Shine bright.”",
    "“Stay golden, bestie.”",
    "“You're like a Kdrama main character fr fr.” 🎬✨",
    "“Nothing beats friendship and Kdramas.”",
    "“Life's better with bubble tea and you.” 🧋❤️",
    "“Heart made of sunshine and chaos.” ☀️😈",
    "“Keep slaying, Queen 👑.”",
    "“Born to make history.”",
    "“You're literally iconic, pls.”",
    "“Don’t let anyone steal your sparkle.” ✨",
    "“Smiles are contagious. You’re a pandemic.” 😷💖",
    "“Your vibe is immaculate.”",
    "“Stay weird, stay wonderful.”",
    "“Life’s short, binge more dramas.” 📺",
    "“You're braver than you believe.”",
    "“Magic is believing in yourself.”"
];

function showRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.textContent = randomQuote;
}

setInterval(showRandomQuote, 1000);

window.onload = function() {
    function startConfettiLoop() {
        
        var width = window.innerWidth;
        var height = window.innerHeight;

        
        confetti({
            particleCount: 50, 
            spread: 360, 
            origin: { x: Math.random(), y: Math.random() } // Set the launch position
        });

        setTimeout(startConfettiLoop, 1000);
    }

    startConfettiLoop();
};