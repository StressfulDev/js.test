document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.couple-card');

	let hasFlippedCard = false;
	let lockBoard = false;
	let firstCard, secondCard;
	let countMatch = 0;
	let header = document.querySelector('.couple-title');
	const btn = document.querySelector('.btn');


	function flipCard() {
		if (lockBoard) return;
		if (this === firstCard) return;

		this.classList.add('flip')

		if (!hasFlippedCard) {
			hasFlippedCard = true;
			firstCard = this;
			return;
		}

		secondCard = this;

		checkForMatch();
	}

	function checkForMatch() {
		let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
		isMatch ? disableCards() : unflipCards();
		if (isMatch) countMatch++;
		if (countMatch === 8) {
			btn.classList.add('btn-visible');
			header.innerHTML = '! CONGRATULATIONS !';
		}
	}

	function disableCards() {
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);

		resetBoard();
	}

	function unflipCards() {
		lockBoard = true;
		setTimeout(() => {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			resetBoard();
		}, 1500);
	}

	function resetBoard() {
		[hasFlippedCard, lockBoard] = [false, false];
		[firstCard, secondCard] = [null, null];
	}

	function restartGame() {
		btn.classList.remove('btn-visible');
		for (const card of cards) {
			card.classList.remove('flip');
		}
		countMatch = 0;
		header.innerHTML = 'Twins';
		cards.forEach(card => card.addEventListener('click', flipCard));
		setTimeout(() => cards.forEach(card => {
			card.style.order = Math.floor(Math.random() * 16);
		}), 1000);
	}

	btn.addEventListener('click', restartGame);

	(function shuffle() {
		cards.forEach(card => {
			card.style.order = Math.floor(Math.random() * 16);
		});
	})();

	cards.forEach(card => card.addEventListener('click', flipCard));
});