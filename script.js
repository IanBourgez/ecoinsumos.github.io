
function goToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    });
}

function animateCounter(id, target, speed){
    let count = 0;
    const element = document.getElementById(id);

    const interval = setInterval(() => {
        count += Math.ceil(target / 100);

        if(count >= target){
            count = target;
            clearInterval(interval);
        }

        element.innerText = count;
    }, speed);
}

animateCounter("counter1", 5000, 25);
animateCounter("counter2", 850, 30);
animateCounter("counter3", 35, 60);
