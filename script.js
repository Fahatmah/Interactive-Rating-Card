var thankYouCard = document.getElementById('thankYouCard');
var ratingCard = document.getElementById('ratingCard');
var rating = document.getElementById('num');
var chosenNumber = document.querySelectorAll('.number');

function show() {
	if (rating.innerHTML == 0) {
		alert('Please rate us first before you submit.');
		thankYouCard.style.display = 'none';
		ratingCard.style.display = 'flex';
	} else {
		thankYouCard.style.display = 'flex';
		ratingCard.style.display = 'none';
	}
}

chosenNumber.forEach((number) => {
	number.addEventListener('click', () => {
		number.style.background = '#fb7413';
		number.style.color = '#ffffff';
		rating.innerHTML = number.innerHTML;
	});
});
