window.logout = function() {

	// TELLS OUR SERVER TO LOG THE USER OUT
	fetch('logout', { method: 'POST'});
	
	// TELLS OUR BROWSER TO SHOW A MESSAGE TO OUR USER
	alert('You are now logged out!');
	
	// REDIRECTS THE USER TO THE HOMEPAGE
	location.href = 'index';
}

// game on
const wordE1 = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part');
const words = ['digital citizenship', 'safety', 'random', 'blank'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];


// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split(")
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;
  const innerWord = wordEl.innerText.replace(/\n/g, '');
  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    popup.style.display = 'flex';
  }
}


// Update the wrong letters
function updateWrongLettersEl() {
	
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? ‘<p>Wrong</p>' : "}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;
  
 // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });
  
  
  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost. 😕';
    popup.style.display = 'flex';
  }
}
// Show notification
function showNotification() {
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}
// Keydown letter press
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});
// Restart game and play again
playAgainBtn.addEventListener(‘click', () => {
  //  Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLettersEl();
  popup.style.display = 'none';
});
displayWord();