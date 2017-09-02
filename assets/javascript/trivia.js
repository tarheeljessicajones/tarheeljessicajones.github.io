function initialize() {
			var count;
			var counter;
			var answer = 0;
			var correct = 0;
			var incorrect = 0;
			var question1;

			$("#begin").on("click", show);
			$("#begin").on("click", start);

			
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

					function score2 () {
					$("form").html("<h1>Game over!</h1> You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.");
					};
					score2();
			};

			function right() {
				correct ++;
			}

			function wrong() {
				incorrect ++;
			}

			function show() {
				$("form").show();
			}

			function hide() {
				$("#instructions").hide();
			}

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

		
		$(document).ready(function() {
			$("form").hide();
			initialize();	
		});