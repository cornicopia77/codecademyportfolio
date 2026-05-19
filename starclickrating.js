

const container = document.getElementById('starRating');
let currentRating = 0;

for (let i = 1; i <= 5; i++) {
  const btn = document.createElement('button');
  btn.innerHTML = '&#9733;';
  btn.dataset.value = i;
  btn.setAttribute('aria-label', `Rate ${i} star${i > 1 ? 's' : ''}`);

  btn.addEventListener('click', () => {
    currentRating = i;
    updateStars(i);
  });

  btn.addEventListener('mouseenter', () => updateStars(i));
  btn.addEventListener('mouseleave', () => updateStars(currentRating));

  container.appendChild(btn);
}

function updateStars(rating) {
  container.querySelectorAll('button').forEach(btn => {
    btn.className = btn.dataset.value <= rating ? 'on' : 'off';
  });
}
 
 
