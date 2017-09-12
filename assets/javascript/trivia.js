	//initialize the new game
	function initialize() {
			//declare variables
			var count;
			var counter;
			var answer = 0;
			var correct = 0;
			var incorrect = 0;
			var question1;

			//game starts once you click the begin button
			$("#begin").on("click", show);
			$("#begin").on("click", start);

			//60 second timer countdown begins. once interval is clear, alert user of their score and and stop the timer countdown
			function decrement() {
  				count--;
  				$("#timeRemaining").html("Time Remaining: " + count + " seconds");
  				$("#submitButton").on("click", submit);
  				if (count === 0) {
  					function score () {
  					$("form").html("<h1>Game over!</h1> You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.");	
  					};

					function stop() {
						clearInterval(counter);
						correct = 0;
						incorrect = 0;
					};
					score();
					stop();
				};
  			}

  			//oncce all answers have been submitted (instead of waiting on interval to clear), check them against correct answers
			function submit() {
					function checkAnswers() {
					$("#1").on("click",right);
					$("#2").on("click",wrong);
					$("#11").on("click",right);
					$("#12").on("click",wrong);
					$("#21").on("click",right);
					$("#22").on("click",wrong);
					$("#31").on("click",right);
					$("#32").on("click",wrong);
					$("#41").on("click",right);
					$("#42").on("click",wrong);
					$("#51").on("click",right);
					$("#52").on("click",wrong);
					$("#61").on("click",right);
					$("#62").on("click",wrong);
					$("#71").on("click",right);
					$("#72").on("click",wrong);
					$("#81").on("click",right);
					$("#82").on("click",wrong);
					$("#91").on("click",right);
					$("#92").on("click",wrong);
					};

					//alert user of their score
					function score2 () {
					$("form").html("<h1>Game over!</h1> You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.");
					};
					score2();
			};

			//for each right answer add a point to the score
			function right() {
				correct ++;
			}
			
			//for each wrong answer subtract a point from the score
			function wrong() {
				incorrect ++;
			}

			//show game
			function show() {
				$("form").show();
			}

			//hide instructions
			function hide() {
				$("#main").hide();
			}

			//start the game by hiding the instructions, setting the count intervval to
			// 60 seconds, and running the check answers function after interval clears
			function start() {
				hide();
		 		count = 60;
				counter = setInterval(decrement, 1000);
				function checkAnswers() {
					$("#1").on("click",right);
					$("#2").on("click",wrong);
					$("#11").on("click",right);
					$("#12").on("click",wrong);
					$("#21").on("click",right);
					$("#22").on("click",wrong);
					$("#31").on("click",right);
					$("#32").on("click",wrong);
					$("#41").on("click",right);
					$("#42").on("click",wrong);
					$("#51").on("click",right);
					$("#52").on("click",wrong);
					$("#61").on("click",right);
					$("#62").on("click",wrong);
					$("#71").on("click",right);
					$("#72").on("click",wrong);
					$("#81").on("click",right);
					$("#82").on("click",wrong);
					$("#91").on("click",right);
					$("#92").on("click",wrong);

				checkAnswers();
			}
		}
}

		//once page loads, hide the game section and initialize the new game function
		$(document).ready(function() {
			$("form").hide();
			initialize();	
		});
