const countdownWrapper = document.getElementById('countdown-wrapper');
const daysDisplay = document.getElementById('countdown-days');
const hoursDisplay = document.getElementById('countdown-hours');
const minutesDisplay = document.getElementById('countdown-minutes');
const secondsDisplay = document.getElementById('countdown-seconds');

const endDate = countdownWrapper.dataset.endDate;
const countDownDate = Date.parse(endDate);

if (countDownDate > Date.now()) {
    const x = setInterval(function () {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysDisplay.innerText = days;
        hoursDisplay.innerText = hours;
        minutesDisplay.innerText = minutes;
        secondsDisplay.innerText = seconds;
    }, 1000);
}