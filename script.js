// A simple array of conversation openers.
// You can add as many as you like here.
const openers = [
  "Hey, I love your shoes. Where did you get them?",
  "If you could instantly learn any skill, what would it be?",
  "What's the best thing that happened to you this week?",
  "If you were a superhero for a day, what power would you choose?",
  "What's your favorite hidden gem in this city?",
  "What are you looking forward to this weekend?",
  "If you could travel anywhere right now, where would you go?",
  "What made you smile today?",
  "Do you have any book or movie recommendations?",
  "What's one interesting fact about you that most people don't know?"
];

// Function to get a random opener
function getRandomOpener() {
  const randomIndex = Math.floor(Math.random() * openers.length);
  return openers[randomIndex];
}

// On page load, attach event listener to the button
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("openerBtn");
  const openerText = document.getElementById("openerText");

  button.addEventListener("click", () => {
    const newOpener = getRandomOpener();
    openerText.textContent = newOpener;
  });
});
