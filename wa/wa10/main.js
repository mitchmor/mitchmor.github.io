const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = [
  'pic1.png',
  'pic2.png',
  'pic3.png',
  'pic4.png',
  'pic5.png',
];

const imageAlts = [
  'Drones in Barcelona',
  'Castles in Karlovy Vary',
  'Sunbeams in Bruges',
  'Planets in Prague',
  'Waterfalls in Munich',
];

imageFilenames.forEach((filename, index) => {
  const newImage = document.createElement('img');
  const imagePath = `images/${filename}`;
  newImage.setAttribute('src', imagePath);
  newImage.setAttribute('alt', imageAlts[index]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imagePath);
    displayedImage.setAttribute('alt', imageAlts[index]);
  });
});

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');

  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

