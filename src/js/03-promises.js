import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstDelay = parseInt(e.target.elements.delay.value);
  const delayStep = parseInt(e.target.elements.step.value);
  const amount = parseInt(e.target.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + (i - 1) * delayStep;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});