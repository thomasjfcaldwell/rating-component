// Variables to bring in elements to manipulate

const voteButtons = document.querySelectorAll('.rating__button');
const voteAmount = document.getElementById('selected');
const ratingCard = document.getElementById('rating__card');
const submitButton = document.getElementById('rating__card-submit');
const thankYou = document.getElementById('thanks-container');

let vote; // Variable to take value of vote

function handleVoteButtonClick({ target }) {
	// Add active class to button pressed and get value. Remove active class to current choice
	removeAllActiveClass();
	target.classList.add('active');
	vote = target.value;
}
function removeAllActiveClass() {
	voteButtons.forEach((button) => button.classList.remove('active'));
}

function handleVoteSubmit() {
	// Submit button to pass value of vote to next view. Remove display of rating card and add display Thank you
	voteAmount.innerHTML = vote;
	ratingCard.className = 'hidden';
	thankYou.className = 'thanks-container';
}

submitButton.addEventListener('click', handleVoteSubmit); // Event listener to fire submit

voteButtons.forEach((button) => {
	button.addEventListener('click', handleVoteButtonClick); /// Adding Event handler for each vote button
});
