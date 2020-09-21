let currentPlayer = 'X';
let gameboard = document.querySelector('.gameboard');
const reset = document.querySelector('#reset');


function switchPlayers() {
	//switch between `x` and `o`
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
	/* TERNARY OPERATOR (CAN REPLACE IF CODE) */
	// currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function clickGameBox(event) {
	if (event.target.classList.contains('box')) {
		if (
			event.target.classList.contains('xBox') ||
			event.target.classList.contains('oBox')
			) {
				return;
			} else if (currentPlayer === 'X') {
				event.target.classList.add('xBox');
				let xShape = document.createElement('span');
				xShape.innerText = 'X';
				event.target.appendChild(xShape);
			} else {
				event.target.classList.add('oBox');
				let oShape = document.createElement('span');
				oShape.innerText = 'O';
				event.target.appendChild(oShape);
			}
		}
		switchPlayers();
	}
	
	gameboard.addEventListener('click', clickGameBox);
	
	reset.addEventListener('click', resetBoxes);
	
	function resetBoxes() {
		let boxes = document.querySelectorAll('div');
		boxes.forEach((box) => {
			box.classList.remove('xBox');
			box.classList.remove('oBox');
			box.innerText = '';
		});
	}
	
	//test
	
	// function checkBoxNotOccupied() {
		//listen to which box is clicked
		// if has class of xMark or oMark
		//func will return true, we can the use func in if statement if(checkBoxNotOccupied) then check box, else send message.
		//determine if the game box is clicked is empty
		
		function startGame() {
			//
		}
		
		function turnSequence() {
			//all the things that happen when a user takes a turn
		}
		
		function writeMessage(message) {
			//update the gameboard message with the message passed to it
		}
		
		function checkWinCondition() {
			//checks for win conditions
		}
		
		function checkTieConditions() {
			//checks if there is a tie
		}