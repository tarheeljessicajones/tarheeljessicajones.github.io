var randomNumber;
  var wins = 0;
  var losses = 0;
  var score = 0;
  var crystal1;
  var crystal2;
  var crystal3;
  var crystal4;



  $(document).ready(function() {

      var randomNumber = Math.floor((Math.random() * 120) + 19);
        $("#randomNumber").html("Random Number: " + randomNumber);

      var crystal1 = Math.floor((Math.random() * 12) + 1);
        $("#crystal1Value").html("Crystal Value: ");
      
      var crystal2 = Math.floor((Math.random() * 12) + 1);
        $("#crystal2Value").html("Crystal Value: ");
      
      var crystal3 = Math.floor((Math.random() * 12) + 1);
        $("#crystal3Value").html("Crystal Value: ");
      
      var crystal4 = Math.floor((Math.random() * 12) + 1); 
        $("#crystal4Value").html("Crystal Value: ")

      $("#crystal1").on("click", function() {
        $("#crystal1Value").html("Crystal Value: " + crystal1);
        if (score <= randomNumber) {
            $("#alertScore").html(score += crystal1);
        }

        if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Wins: " + wins +
                               " Losses: " + losses);
            alert("YOU WON!");
        }

        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Wins: " + wins + 
                                   " Losses: " + losses);
                alert("SORRY, BUT YOU LOST!");
        };
      });



      $("#crystal2").on("click", function() {
        $("#crystal2Value").html("Crystal Value: " + crystal2);
         if (score <= randomNumber) {
           $("#alertScore").html(score += crystal2);
         }

         if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Wins: " + wins +
                               " Losses: " + losses);
            alert("YOU WON!");
          }
       
        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Wins: " + wins + 
                                   " Losses: " + losses);
                alert("SORRY, BUT YOU LOST!");
          };
      });

      $("#crystal3").on("click", function() {
        $("#crystal3Value").html("Crystal Value: " + crystal3);
        if (score <= randomNumber) {
            $("#alertScore").html(score += crystal3);
        }

        if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Wins: " + wins +
                               " Losses: " + losses);
            alert("YOU WON!");
        }

        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Wins: " + wins + 
                                   " Losses: " + losses);
                alert("SORRY, BUT YOU LOST!");
        };
      });


      $("#crystal4").on("click", function() {
        $("#crystal4Value").html("Crystal Value: " + crystal4);
        if (score <= randomNumber) {
            $("#alertScore").html(score += crystal4);
        }

        if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Wins: " + wins +
                               " Losses: " + losses);
            alert("YOU WON!");
        }

        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Wins: " + wins + 
                                   " Losses: " + losses);
                alert("SORRY, BUT YOU LOST!");
        };
      });
 });
