document.getElementById('showMessage').addEventListener('click', function() {
    var messageParagraph = document.getElementById('birthdayWish');
    messageParagraph.style.display = 'none'; // Hide the birthday wish text

    document.getElementById('surpriseMessage').classList.toggle('hidden');
    document.body.style.overflow = 'auto'; // Enable scrolling

    var button = document.getElementById('showMessage');
    button.textContent = "Yeuu Malah di Pencet luwh 👉👈";
    button.disabled = true; // Optional: disable button after clicking

    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    function fireworks() {
        var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        for (var i = 0; i < 50; i++) {
            createFirework(colors[Math.floor(Math.random() * colors.length)]);
        }
    }

    function createFirework(color) {
        var particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.backgroundColor = color;
        document.getElementById('fireworksContainer').appendChild(particle);
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
    }

    fireworks();

    document.getElementById('backToStart').addEventListener('click', function() {
        location.reload();
    });

    document.getElementById('stay').addEventListener('click', function() {
        document.getElementById('surpriseMessage').classList.add('hidden');
        button.textContent = "Click for a surprise!";
        button.disabled = false;
    });
});
