//FACTS FACTS LUNGGSSS
const button = document.getElementById("btn");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const factText = document.getElementById("fact");

const facts = [
  "The universe is about 13.8 billion years old.",
  "Light from the Sun takes 8 minutes to reach Earth.",
  "The Milky Way has over 100 billion stars.",
  "There are more stars than grains of sand on Earth.",
  "A day on Venus is longer than a year on Venus.",
  "Neutron stars can spin 600 times per second.",
  "Space is completely silent—no air for sound.",
  "The hottest planet is Venus, not Mercury.",
  "A spoon of neutron star weighs billions of tons.",
  "Jupiter is bigger than all other planets combined.",
  "Mars has the tallest volcano—Olympus Mons.",
  "Saturn could float in water (low density).",
  "Uranus rotates on its side.",
  "Pluto is smaller than Earth’s Moon.",
  "Mercury has no atmosphere.",
  "One year on Neptune = 165 Earth years.",
  "Jupiter has over 90 moons.",
  "The Moon is slowly moving away from Earth.",
  "Mars sunsets are blue.",
  "Earth is the only known planet with life.",
  "The Sun is a medium-sized star.",
  "Some stars are bigger than our solar system.",
  "Black holes can bend light.",
  "The Milky Way is a spiral galaxy.",
  "Galaxies can collide.",
  "The nearest galaxy is Andromeda.",
  "Andromeda will collide with the Milky Way someday.",
  "Stars are born in nebulae.",
  "Supernovae create heavy elements.",
  "Some stars are billions of years older than the Sun.",
  "Black holes have gravity so strong light can’t escape.",
  "Time slows down near a black hole.",
  "There may be rogue planets drifting alone.",
  "Space is mostly empty.",
  "Dark matter makes up most of the universe.",
  "Dark energy is expanding the universe.",
  "The universe is still growing.",
  "You can see the past when you look at stars.",
  "Cosmic rays constantly hit Earth.",
  "The coldest place is space (~ -270°C).",
  "You are made of star dust.",
  "There may be billions of habitable planets.",
  "Astronauts grow taller in space.",
  "The ISS is visible from Earth.",
  "Space has a smell (like burnt metal).",
  "The Sun will become a red giant someday.",
  "The universe might be infinite.",
  "No one knows what’s beyond the observable universe.",
  "Gravity works everywhere in space.",
  "We’ve explored less than 1% of the universe."
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.innerText = facts[randomIndex];

  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("show"), 10);
});

closeBtn.addEventListener("click", () => {
  closePopup();
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closePopup();
  }
});

function closePopup() {
  overlay.classList.remove("show");
  setTimeout(() => overlay.classList.add("hidden"), 300);
}

//GAMES GAMES LUNGSSS

const questions = [
  { q: "The Sun is a star?", answer: "RIGHT" },
  { q: "Mars is closer to the Sun than Mercury?", answer: "WRONG" },
  { q: "Earth has 2 moons?", answer: "WRONG" },
  { q: "Venus is hotter than Mercury?", answer: "RIGHT" },
  { q: "Jupiter has more than 50 moons?", answer: "RIGHT" },
  { q: "Neptune is the closest planet to the Sun?", answer: "WRONG" },
  { q: "Pluto is a planet?", answer: "WRONG" },
  { q: "Saturn has rings?", answer: "RIGHT" },
  { q: "The Moon is a star?", answer: "WRONG" },
  { q: "Water exists on Mars?", answer: "RIGHT" },
  { q: "Mercury has no atmosphere?", answer: "RIGHT" },
  { q: "Uranus rotates on its side?", answer: "RIGHT" },
  { q: "Venus has moons?", answer: "WRONG" },
  { q: "The Milky Way is a galaxy?", answer: "RIGHT" },
  { q: "Black holes can bend light?", answer: "RIGHT" },
  { q: "Neutron stars can spin faster than a car engine?", answer: "RIGHT" },
  { q: "There is no sound in space?", answer: "RIGHT" },
  { q: "The Sun is bigger than Jupiter?", answer: "RIGHT" },
  { q: "Comets are made of ice and dust?", answer: "RIGHT" },
  { q: "Mars is known as the Red Planet?", answer: "RIGHT" },
  { q: "Earth is flat?", answer: "WRONG" },
  { q: "Saturn is denser than water?", answer: "WRONG" },
  { q: "The Moon causes tides on Earth?", answer: "RIGHT" },
  { q: "A day on Venus is shorter than a year?", answer: "WRONG" },
  { q: "Pluto has an atmosphere?", answer: "RIGHT" },
  { q: "Jupiter has a giant storm called the Great Red Spot?", answer: "RIGHT" },
  { q: "The Sun will become a black hole?", answer: "WRONG" },
  { q: "Mercury has craters like the Moon?", answer: "RIGHT" },
  { q: "Neptune is blue?", answer: "RIGHT" },
  { q: "The Sun is the center of the universe?", answer: "WRONG" },
  { q: "Venus spins backwards compared to Earth?", answer: "RIGHT" },
  { q: "Stars are made of gas?", answer: "RIGHT" },
  { q: "A light-year is a measure of time?", answer: "WRONG" },
  { q: "The Moon is moving away from Earth?", answer: "RIGHT" },
  { q: "Pluto is smaller than Earth’s Moon?", answer: "RIGHT" },
  { q: "Earth has an ozone layer?", answer: "RIGHT" },
  { q: "Some stars are bigger than the Sun?", answer: "RIGHT" },
  { q: "Dark matter is visible?", answer: "WRONG" },
  { q: "Comets orbit the Sun?", answer: "RIGHT" },
  { q: "Black holes suck everything instantly?", answer: "WRONG" },
  { q: "The ISS orbits Earth?", answer: "RIGHT" },
  { q: "Astronauts can grow taller in space?", answer: "RIGHT" },
  { q: "The universe is 13.8 billion years old?", answer: "RIGHT" },
  { q: "Mars has seasons like Earth?", answer: "RIGHT" },
  { q: "Venus is colder than Earth?", answer: "WRONG" },
  { q: "Saturn is the only planet with rings?", answer: "WRONG" },
  { q: "Neptune has winds faster than sound?", answer: "RIGHT" },
  { q: "Some galaxies are colliding?", answer: "RIGHT" },
  { q: "Time slows down near black holes?", answer: "RIGHT" },
  { q: "The Moon has water?", answer: "RIGHT" },
  { q: "We have visited Jupiter?", answer: "WRONG" },
  { q: "The Sun will eventually become a red giant?", answer: "RIGHT" },
];

let usedQuestions = [];

const questionEl = document.getElementById("question");
const correctBtn = document.getElementById("correct");
const wrongBtn = document.getElementById("wrong");

const ovelay = document.getElementById("lay");
const pup = document.getElementById("pops");
const closBtn = document.getElementById("not");
const QText = document.getElementById("quest");

function nextQuestion() {
  if (usedQuestions.length === questions.length) {
    questionEl.innerText = "GAME OVER!";
    correctBtn.disabled = true;
    wrongBtn.disabled = true;
    return;
  }

  let idx;
  do {
    idx = Math.floor(Math.random() * questions.length);
  } while (usedQuestions.includes(idx));

  usedQuestions.push(idx);

  const q = questions[idx];
  questionEl.innerText = q.q;

  if (Math.random() > 0.5) {
    correctBtn.dataset.answer = q.answer === "RIGHT" ? "RIGHT" : "WRONG";
    wrongBtn.dataset.answer = q.answer === "RIGHT" ? "WRONG" : "RIGHT";
  } else {
    wrongBtn.dataset.answer = q.answer === "RIGHT" ? "RIGHT" : "WRONG";
    correctBtn.dataset.answer = q.answer === "RIGHT" ? "WRONG" : "RIGHT";
  }
}

function showPopup(message) {
  factText.innerText = message;
  overlay.classList.remove("hide");
  setTimeout(() => overlay.classList.add("show"), 10);
}

function handleAnswer(e) {
  if (e.target.dataset.answer === "RIGHT") {
    showPopup("Correct ✅");
  } else {
    showPopup("Wrong ❌");
  }
  setTimeout(nextQuestion, 1000); // Next question after 1 sec
}

correctBtn.addEventListener("click", handleAnswer);
wrongBtn.addEventListener("click", handleAnswer);

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
  setTimeout(() => overlay.classList.add("hide"), 300);
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
    setTimeout(() => overlay.classList.add("hide"), 300);
  }
});

nextQuestion();