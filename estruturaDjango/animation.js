/*  // JavaScript puro
document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('box');
    let position = 0;
    const interval = setInterval(function() {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position++;
            box.style.transform = `translateX(${position}px)`;
        }
    }, 5);
});
*/
// Animação usando GSAP
document.getElementById('animateButton').addEventListener('click', function() {
    gsap.to("#box", { duration: 2, x: 300 });
});
