const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg',
];

const imageAlts = [
  'Closeup of a human eye',
  'Image description 2',
  'Image description 3',
  'Image description 4',
  'Image description 5',
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