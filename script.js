const ideaText = document.getElementById('ideaText');
const jarImage = document.getElementById('jarImage');
const sound = document.getElementById('sparkleSound');

const ideas = [
  "Piano", "Violin", "Reading self-help", "Procreate drawing",
  "Drawing on paper", "Twerking", "Belly dancing", "Reading for fun",
  "Trim nails", "Gold hairdo", "Cool eyeliner", "Train backflip",
  "Walk in nature (White Water Park)", "Judo", "Hapkido", "New language"
];

jarImage.addEventListener('click', () => {
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  ideaText.textContent = idea;
  sound.currentTime = 0;
  sound.play();
});