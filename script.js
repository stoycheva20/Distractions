
const ideas = [
  "Piano", "Violin", "Reading self help", "Procreate drawing", "Drawing on paper",
  "Twerking", "Belly dancing", "Reading for fun", "Trim nails", "Gold hairdo",
  "Cool eyeliner", "Train backflip", "Walk in nature (White Water Park)",
  "Judo", "Hapkido", "New language"
];

const jar = document.getElementById('jarImage');
const text = document.getElementById('ideaText');

jar.addEventListener('click', () => {
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  text.textContent = idea;
});
