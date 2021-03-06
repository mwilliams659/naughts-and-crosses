// Noughts and Crosses Javascript 


var currentPlayer = "O";
// this is the state of play
var board = ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"];
var winner = "None";
var scoreX = 0;
var scoreO = 0;

// This function lets user click the box but once clicked, it cannot be changed
function place(box) {
    if(box.innerText != "") return;
    // Box id turned into integer
    const boxId = parseInt(box.id) 
    box.innerText = currentPlayer;
    // updates the board
    board[boxId] = currentPlayer;
 
	checkWinner();
	// If the winner is not announced, this function checks if there has been a draw 
	if (!announceWinner()) {
		checkIfDraw();
	}
	
    // The next turn changes to the next player after first player plays
	currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
	highlightNextPlayer();

};


function announceWinner() {
    if (winner === "X") {
		// Sound effect for win
		document.getElementById("win-mp3").play();
        // Displays header showing the winner of the game
		document.getElementById("winnerOfGameHeaderX").style.display = "block";
        // Starts the confetti
        startConfetti();
        // Removes user interactivity on the board whilst the winner is announced
        document.getElementById("game").style.pointerEvents = "none";
        setTimeout(function() {
        // Resets the board after 5 seconds
        resetBoard();
		}, 3000);
		return true;
    }
    if (winner === "O") {
		// Sound effect for win
		document.getElementById("win-mp3").play();
		// Displays header showing the winner of the game
		document.getElementById("winnerOfGameHeaderO").style.display = "block";
        // Starts the confetti
        startConfetti();
        // Removes user interactivity on the board whilst the winner is announced
        document.getElementById("game").style.pointerEvents = "none";
        setTimeout(function() {
        // Resets the board after 5 seconds
        resetBoard();
		}, 3000);
		return true;
    }
}


// This removes all the innerHTML inputs that were used in the game and leaves the boxes blank
function resetBoard() {
    // Stops the confetti animation
	stopConfetti();
	const list = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
	for(item in list){
		box = document.getElementById(item);
		box.innerText = "";
	}
    winner = "None";
    board = ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"];
    
    // This hides the "X/O is the winner" header that appears when a player wins
    document.getElementById("winnerOfGameHeaderX").style.display = "none";
	document.getElementById("winnerOfGameHeaderO").style.display = "none";
	document.getElementById("itsADraw").style.display = "none";

    // Re-instates user interactivity on the board once the board reloads after a player wins
    document.getElementById("game").style.pointerEvents = "auto";

}

// This resets the whole game including points by reloading the page
function resetGame() {
	location.reload();
}

function checkWinner() {
       // 0, 1, 2
       if(board[0] != "Empty"){
        if((board[1] != "Empty") && (board[1] === board[0])){
            if((board[2] != "Empty") && (board[2] === board[1])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 0, 3, 6
    if(board[0] != "Empty"){
        if((board[3] != "Empty") && (board[3] === board[0])){
            if((board[6] != "Empty") && (board[3] === board[6])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 0, 4, 8
    if(board[0] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[0])){
            if((board[8] != "Empty") && (board[4] === board[8])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 1, 4, 7
    if(board[1] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[1])){
            if((board[7] != "Empty") && (board[4] === board[7])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 2, 5, 8
    if(board[2] != "Empty"){
        if((board[5] != "Empty") && (board[5] === board[2])){
            if((board[8] != "Empty") && (board[5] === board[8])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 2, 4, 6
    if(board[2] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[2])){
            if((board[6] != "Empty") && (board[4] === board[6])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 3, 4, 5
    if(board[3] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[3])){
            if((board[5] != "Empty") && (board[4] === board[5])){
                winner = currentPlayer
				addScore();
            }
        }
    }
    // 6, 7, 8
    if(board[6] != "Empty"){
        if((board[7] != "Empty") && (board[7] === board[6])){
            if((board[8] != "Empty") && (board[7] === board[8])){
                winner = currentPlayer
				addScore();
            }
        }
	}
}


// Function checks if the board includes the string "Empty". It is true until the board is full and then becomes false. False = draw.
function checkIfDraw() {
	let draw = board.includes("Empty")
	if(draw === false) {
		// Sound effect for draw
		document.getElementById("draw-mp3").play();
		// Display's the message that the result is a draw
		document.getElementById("itsADraw").style.display = "block";
		setTimeout(function() {
		// Resets the board after 5 seconds
		resetBoard();
		}, 2000);
	}
}

// Adds points to the scoreboards
function addScore() {
	if (winner === "X") {
		scoreX = scoreX + 1;
		document.getElementById("scoreX").innerHTML = "X points: " + scoreX;
	}
	else if (winner === "O") {
		scoreO = scoreO + 1;
		document.getElementById("scoreO").innerHTML = "O points: " + scoreO;

	}
	return 
}

// This function highlights which player's turn it is next by highlighting the score green and the other player's will be white
function highlightNextPlayer() {
	if (currentPlayer === "O") {
		document.getElementById("scoreO").style.borderColor = "#26ec0f";
		document.getElementById("scoreO").style.color = "#26ec0f";
		document.getElementById("scoreX").style.borderColor = "white";
		document.getElementById("scoreX").style.color = "white";
		}
	else if (currentPlayer === "X") {
		document.getElementById("scoreX").style.borderColor = "#26ec0f";
		document.getElementById("scoreX").style.color = "#26ec0f";
		document.getElementById("scoreO").style.borderColor = "white";
		document.getElementById("scoreO").style.color = "white";
		}
	}





























// Confetti.js - downloaded from https://www.cssscript.com/confetti-falling-animation/

var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

// Immediately invoked function expression

confetti.start = startConfetti;
confetti.stop = stopConfetti;
confetti.toggle = toggleConfetti;
confetti.pause = pauseConfetti;
confetti.resume = resumeConfetti;
confetti.togglePause = toggleConfettiPause;
confetti.isPaused = isConfettiPaused;
confetti.remove = removeConfetti;
confetti.isRunning = isConfettiRunning;
var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
var streamingConfetti = false;
var animationTimer = null;
var pause = false;
var lastFrameTime = Date.now();
var particles = [];
var waveAngle = 0;
var context = null;

function resetParticle(particle, width, height) {
	particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
	particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
	particle.x = Math.random() * width;
	particle.y = Math.random() * height - height;
	particle.diameter = Math.random() * 10 + 5;
	particle.tilt = Math.random() * 10 - 10;
	particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
	particle.tiltAngle = Math.random() * Math.PI;
	return particle;
}

function toggleConfettiPause() {
	if (pause)
		resumeConfetti();
	else
		pauseConfetti();
}

function isConfettiPaused() {
	return pause;
}

function pauseConfetti() {
	pause = true;
}

function resumeConfetti() {
	pause = false;
	runAnimation();
}

function runAnimation() {
	if (pause)
		return;
	else if (particles.length === 0) {
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		animationTimer = null;
	} else {
		var now = Date.now();
		var delta = now - lastFrameTime;
		if (!supportsAnimationFrame || delta > confetti.frameInterval) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			updateParticles();
			drawParticles(context);
			lastFrameTime = now - (delta % confetti.frameInterval);
		}
		animationTimer = requestAnimationFrame(runAnimation);
	}
}

function startConfetti(timeout, min, max) {
	var width = window.innerWidth;
	var height = window.innerHeight;
	window.requestAnimationFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				return window.setTimeout(callback, confetti.frameInterval);
			};
	})();
	var canvas = document.getElementById("confetti-canvas");
	if (canvas === null) {
		canvas = document.createElement("canvas");
		canvas.setAttribute("id", "confetti-canvas");
		canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
		document.body.prepend(canvas);
		canvas.width = width;
		canvas.height = height;
		window.addEventListener("resize", function() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}, true);
		context = canvas.getContext("2d");
	} else if (context === null)
		context = canvas.getContext("2d");
	var count = confetti.maxCount;
	if (min) {
		if (max) {
			if (min == max)
				count = particles.length + max;
			else {
				if (min > max) {
					var temp = min;
					min = max;
					max = temp;
				}
				count = particles.length + ((Math.random() * (max - min) + min) | 0);
			}
		} else
			count = particles.length + min;
	} else if (max)
		count = particles.length + max;
	while (particles.length < count)
		particles.push(resetParticle({}, width, height));
	streamingConfetti = true;
	pause = false;
	runAnimation();
	if (timeout) {
		window.setTimeout(stopConfetti, timeout);
	}
}

function stopConfetti() {
	streamingConfetti = false;
}

function removeConfetti() {
	stop();
	pause = false;
	particles = [];
}

function toggleConfetti() {
	if (streamingConfetti)
		stopConfetti();
	else
		startConfetti();
}

function isConfettiRunning() {
	return streamingConfetti;
}

function drawParticles(context) {
	var particle;
	var x, y, x2, y2;
	for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		context.beginPath();
		context.lineWidth = particle.diameter;
		x2 = particle.x + particle.tilt;
		x = x2 + particle.diameter / 2;
		y2 = particle.y + particle.tilt + particle.diameter / 2;
		if (confetti.gradient) {
			var gradient = context.createLinearGradient(x, particle.y, x2, y2);
			gradient.addColorStop("0", particle.color);
			gradient.addColorStop("1.0", particle.color2);
			context.strokeStyle = gradient;
		} else
			context.strokeStyle = particle.color;
		context.moveTo(x, particle.y);
		context.lineTo(x2, y2);
		context.stroke();
	}
}

function updateParticles() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var particle;
	waveAngle += 0.01;
	for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		if (!streamingConfetti && particle.y < -15)
			particle.y = height + 100;
		else {
			particle.tiltAngle += particle.tiltAngleIncrement;
			particle.x += Math.sin(waveAngle) - 0.5;
			particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
			particle.tilt = Math.sin(particle.tiltAngle) * 15;
		}
		if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
			if (streamingConfetti && particles.length <= confetti.maxCount)
				resetParticle(particle, width, height);
			else {
				particles.splice(i, 1);
				i--;
			}
		}
	}
}

