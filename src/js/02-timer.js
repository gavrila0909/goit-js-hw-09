
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startButton = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let ms;


 flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedData = selectedDates[0];
      if (selectedData < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    }
  });

function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
}

function startCountdown() {
    const pickerTime = new Date(document.getElementById('datetime-picker').value).getTime();
    const currentData = new Date().getTime();
    ms = pickerTime - currentData;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(ms / day);
    const h = Math.floor((ms % day) / hour);
    const m = Math.floor(((ms % day) % hour) / minute);
    const s = Math.floor((((ms % day) % hour) % minute) / second);

    days.textContent = addLeadingZero(d); 
    hours.textContent = addLeadingZero(h);  // h < 10 ? '0' + h : h (functia mai sus)
    minutes.textContent = addLeadingZero(m);
    seconds.textContent = addLeadingZero(s);
}

startButton.addEventListener('click', startCountdown)
setInterval(startCountdown, 1000);
