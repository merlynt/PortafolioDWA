const counters = document.querySelectorAll('.counter-number');
const duration = 6000; 
const stepTime = 10;   
console.log(counters)

counters.forEach(counter => {
    let currentNumber = 0;
    const finalTarget = parseInt(counter.getAttribute('data-target'));
    const totalSteps = duration / stepTime; 
    const increment = finalTarget / totalSteps;

    counter.textContent = '+' + 0;
    const interval = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber < finalTarget) {
            counter.textContent = '+' + Math.ceil(currentNumber);
        } else {
            counter.textContent = '+' + finalTarget;
            clearInterval(interval);
        }
    }, stepTime);
});