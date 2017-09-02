  var majors = ["Computer Science", "Communications", "Political Science", "Business Administration", "Engineering", "English", "Psychology","Nursing","Biology","Education"];

      function renderButtons() {
        $("#top").empty();
        for (var i = 0; i < majors.length; i++) {
          var a = $("<button>");
               // Adding a class
              a.addClass("major");
              // Added a data-attribute
              a.attr("data-search", majors[i]);
              // Provided the initial button text
              a.text(majors[i]);
              // Added the button to the HTML
              $("#top").append(a);
          }
      } 

      function displayMajorInfo() {
        $("#outcome").empty();
         var x = $(this).data("search");
          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10"; 
          console.log(queryURL);

      $.ajax({url:queryURL,method:"GET"})

        .done(function(response) {
          var results = response.data;
          for (var i=0; i<results.length ; i++) {
            var rating = results[i].rating;
            var p = $("<p>").html("Rating: " + rating);
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-animate", results[i].images.fixed_height.url);
            image.attr("class", 'url');
            image.attr("data-state", 'still');
           
            $("#outcome").prepend(p);
            $("#outcome").prepend(image);

          }

          $(".url").on("click", function() {
                var state = $(this).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                     $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    }
              });
        });
      }
  

      $("#add-major").on("click", function(event) {
        event.preventDefault();
        var major = $("#to-do").val().trim();
        // The movie from the textbox is then added to our array
        majors.push(major);
        // Calling renderButtons which handles the processing of our major array
        renderButtons();
      });

    $(document).on("click", ".major", displayMajorInfo);

    renderButtons();
