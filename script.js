// A simple array of conversation openers.
// You can add as many as you like here.
const openers = [
  "Hey, I love your shoes. Where did you get them?",
  "Do you live in thie city? What's fun to do around here?",
  "If you could travel anywhere right now, where would you go?",
  "I'm trying to choose my next read, do you have any recs?",
  "I'm trying to choose my next movie, do you have any recs?",
  "What's one interesting fact about you that most people don't know?",
  "Hey, I've never been here before—what's good on the menu?",
  "I noticed they're playing some great music tonight. Are you into this kind of stuff?",
  "I'm trying to decide on a new drink. What do you usually go for?",
  "I saw you laughing at that last song choice—do you think the DJ's on point or just winging it?",
  "This place has a cool vibe. What brought you here tonight?",
  "I noticed you're reading the cocktail list like you're on a mission—any hidden gems I should know about?",
  "I'm in a celebratory mood. What's something good that happened to you recently?",
  "I love the energy in here. Do you come here often or is this just a spontaneous drop-in?",
  "I couldn't help but overhear your comment about [topic]. Mind sharing more about that?"
  "You seem like you're having a good time. What's been the highlight of your night so far?",
  "The vibe here is chill. Do you know if they host any live music or special events?",
  "I just noticed that artwork on the wall—kind of intriguing, right?",
  "It's pretty packed in here. How'd you discover this spot?",
  "I’m tempted to try something completely new on the menu—got any adventurous recommendations?",
  "I love how friendly people are here. Have you met any cool strangers tonight?",
  "This place has such a unique crowd. What do you think draws everyone in?"
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
