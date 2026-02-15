const waveTexts = document.querySelectorAll('.animated-title');

// sin vars
let phase = 0;
const amp = 5;
const freq = 0.1;
const spd = 0.05;

// wrap all chars in spans on a page. 
waveTexts.forEach((text) => {
    const chars = text.textContent.split('');
    text.textContent = '';

    chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        if (char === ' ') {
            // ok this is necessary because a empty 
            // span will collapse into nothing on most browsers.
            // a ' ' becomes <span> </span>
            // this tells us the span isnt empty. 
            span.innerHTML = '&nbsp;';
        }
        text.appendChild(span);
    });
});

const letters = document.querySelectorAll('.animated-title span');
console.log(letters);

// animate each span on the sin wave. 
function animateWave() {
    letters.forEach((letter, index) => {
        const yOffset = amp * Math.sin(freq * index + phase);
        letter.style.transform = `translateY(${yOffset}px)`;
    });
    phase += spd;
    requestAnimationFrame(animateWave);
}

animateWave();

