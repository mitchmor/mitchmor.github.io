const volumeUp = document.getElementById('volume-up');
const volumeDown = document.getElementById('volume-down');

volumeUp.addEventListener('click', () => {
  alert('Volume increased! Just kidding.');
});

volumeDown.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  alert('Oh did you want to decrease the volume? How about lets change the background color instead.');
});
