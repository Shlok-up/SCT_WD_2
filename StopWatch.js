
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

document.addEventListener("DOMContentLoaded", function() {
	const startBtn = document.querySelector(".start-btn");
	const stopBtn = document.querySelector(".stop-btn");
	const resetBtn = document.querySelector(".reset-btn");
	const timeDisplay = document.querySelector(".time");

	startBtn.addEventListener("click", startTimer);
	stopBtn.addEventListener("click", stopTimer);
	resetBtn.addEventListener("click", resetTimer);

	function startTimer() {
		startTime = Date.now();
		timerInterval = setInterval(updateTimer, 1000);
		startBtn.disabled = true;
		stopBtn.disabled = false;
	}

	function stopTimer() {
		clearInterval(timerInterval);
		elapsedTime = Date.now() - startTime;
		stopBtn.disabled = true;
		startBtn.disabled = false;
	}

	function resetTimer() {
		clearInterval(timerInterval);
		elapsedTime = 0;
		startTime = 0;
		timeDisplay.textContent = "00:00:00";
		startBtn.disabled = false;
		stopBtn.disabled = true;
	}

	function updateTimer() {
		const currentTime = Date.now();
		const timeElapsed = currentTime - startTime;
		const hours = Math.floor(timeElapsed / 3600000);
		const minutes = Math.floor((timeElapsed % 3600000) / 60000);
		const seconds = Math.floor((timeElapsed % 60000) / 1000);
		timeDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	}
});
